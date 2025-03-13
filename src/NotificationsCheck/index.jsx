import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, message]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((_, index) => index !== 0));
    }, 3000);
  };
  return (
    <>
      <div>
        <button onClick={() => addNotification("New notification!")}>
          Add Notification
        </button>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              style={{
                background: "lightblue",
                margin: "5px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {notification}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
