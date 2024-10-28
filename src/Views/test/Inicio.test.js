import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inicio from '../Inicio';

describe('Página de Inicio', () => {
  test('renderiza el título principal', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/SISTEMA INTEGRAL DE GESTION ADMINISTRATIVA/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renderiza los enlaces de botones principales', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );
    const calendarioLink = screen.getAllByText(/Calendario/i)[0]; // Selecciona el primer "Calendario"
    const bitacoraLink = screen.getByText(/Bitácora/i);
    const boletinLink = screen.getByText(/Boletín/i);

    expect(calendarioLink).toBeInTheDocument();
    expect(bitacoraLink).toBeInTheDocument();
    expect(boletinLink).toBeInTheDocument();
  });

  test('renderiza el slider con las imágenes', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );
    const sliderImages = screen.getAllByAltText(/IM1/i);
    expect(sliderImages[0]).toBeInTheDocument();
  });
});
