import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../../pages/Contact/Contact';

test('Valida campos obligatorios en el formulario de contacto', () => {
  render(<Contact />);
  
  const submitButton = screen.getByText(/Enviar/i);
  fireEvent.click(submitButton);
  
  const nameError = screen.getByText(/El nombre es obligatorio/i);
  const emailError = screen.getByText(/El correo es obligatorio/i);
  expect(nameError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
});

test('Muestra mensaje de éxito al enviar el formulario correctamente', () => {
  render(<Contact />);
  
  fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Asunto/i), { target: { value: 'Prueba' } });
  fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Este es un mensaje de prueba' } });
  
  const submitButton = screen.getByText(/Enviar/i);
  fireEvent.click(submitButton);
  
  const successMessage = screen.getByText(/Formulario enviado con éxito/i);
  expect(successMessage).toBeInTheDocument();
});
