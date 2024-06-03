// NotificationContainer.tsx
import React, { useState } from 'react';

interface Notification {
  message: string;
  id: number;
}

const NotificationContainer: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string) => {
    const newNotification = { message, id: Date.now() };
    setNotifications([...notifications, newNotification]);
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000); // Automatically remove after 5 seconds
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <div key={notification.id} className="notification">
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>Close</button>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
