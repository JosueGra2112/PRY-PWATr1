import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

// Mock para localStorage y navigate
beforeEach(() => {
  global.fetch = jest.fn();
  Storage.prototype.setItem = jest.fn();
});

afterEach(() => {
  global.fetch.mockClear();
  Storage.prototype.setItem.mockClear();
});

describe('Pruebas de inicio de sesión en el componente Login', () => {
  test('Inicio de sesión exitoso con cargo "Secretario", usuario "Jox", y contraseña "Perro2112"', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({
        success: true,
        message: 'Autenticación exitosa',
        data: [{ nombre: 'Jox', ap_paterno: 'Apellido', ap_materno: 'Paterno', iduser: '1' }],
      }),
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Seleccionar Cargo/i), { target: { value: 'Secretario' } });
    fireEvent.change(screen.getByLabelText(/Usuario/i), { target: { value: 'Jox' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'Perro2112' } });
    fireEvent.click(screen.getByRole('button', { name: /Acceder/i }));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify('Jox Apellido Paterno'));
      expect(localStorage.setItem).toHaveBeenCalledWith('idUser', '1');
    });
  });

  test('Inicio de sesión fallido muestra mensaje de error de credenciales incorrectas', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({
        success: false,
        message: 'Credenciales incorrectas',
      }),
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Seleccionar Cargo/i), { target: { value: 'Secretario' } });
    fireEvent.change(screen.getByLabelText(/Usuario/i), { target: { value: 'Jox' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'ContraseñaIncorrecta' } });
    fireEvent.click(screen.getByRole('button', { name: /Acceder/i }));

    await waitFor(() => {
      expect(screen.getByText(/Error de autenticación. Por favor, verifica tus credenciales./i)).toBeInTheDocument();
    });
  });
});
