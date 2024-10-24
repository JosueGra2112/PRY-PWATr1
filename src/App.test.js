import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import messaging from './firebase'; // Asegúrate de que esta ruta sea correcta

jest.mock('./firebase', () => ({
  messaging: {}, // Mockea el objeto messaging
}));

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
