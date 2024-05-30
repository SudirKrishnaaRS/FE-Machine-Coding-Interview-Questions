import { useCallback, useState } from "react";
import Notification from "../components/notification";

// Custom Hook
const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  //   For timer reset
  let timer;

  //   Wrapping in useCallback for the timer to reset each time
  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);

    // Duration
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
