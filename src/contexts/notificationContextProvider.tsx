import { NotificationContext } from "./notificationContext";

import { useState } from "react";
import { Notification } from "../type";
import { NotificationContextType } from "./notificationContext";

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const addNotification = (message: string, type: Notification["type"]) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const notificationContextValue: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
  };
  return (
    <NotificationContext.Provider value={notificationContextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
