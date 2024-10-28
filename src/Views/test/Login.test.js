import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

describe('Componente Login', () => {
  test('renderiza los campos y el botón de inicio de sesión', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Seleccionar Cargo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Acceder/i })).toBeInTheDocument();
  });

  test('muestra mensaje de error si los campos están vacíos al enviar', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /Acceder/i }));
    expect(screen.getByText(/Todos los campos deben estar llenos/i)).toBeInTheDocument();
  });

  test('actualiza el estado del campo usuario correctamente', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const usernameInput = screen.getByLabelText(/Usuario/i);
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');
  });

  test('muestra el mensaje de autenticación fallida si las credenciales son incorrectas', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false, message: 'Error de autenticación. Por favor, verifica tus credenciales.' }),
      })
    );
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/Seleccionar Cargo/i), { target: { value: 'Administrador' } });
    fireEvent.change(screen.getByLabelText(/Usuario/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /Acceder/i }));

    const errorMessage = await screen.findByText(/Error de autenticación. Por favor, verifica tus credenciales./i);
    expect(errorMessage).toBeInTheDocument();
  });
});
