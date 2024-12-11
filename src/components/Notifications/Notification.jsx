import { useState } from 'react';
import './Notification.css';

const Notification = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), duration);
  };

  return (
    <>
      {isVisible && (
        <div className="notification">
          {message}
        </div>
      )}
      <button className="notification-button" onClick={showNotification}>
        Probar Notificación
      </button>
    </>
  );
};

export default Notification;
