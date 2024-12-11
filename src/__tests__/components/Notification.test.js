import { render, screen } from '@testing-library/react';
import Notification from '../../components/Notifications/Notification';

test('El componente Notification renderiza correctamente', () => {
  render(<Notification message="Notificación de prueba" />);
  expect(screen.getByText(/Notificación de prueba/i)).toBeInTheDocument();
});

