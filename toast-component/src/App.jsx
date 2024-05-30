import "./App.css";
import useNotification from "./hooks/use-notification";

function App() {
  // Custom Hook
  const { NotificationComponent, triggerNotification } =
    useNotification("bottom-left");

  return (
    <div>
      Hare Krishna
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "Submitted Successfully",
            duration: 3000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "Failed to submit!!",
            duration: 3000,
          })
        }
      >
        Trigger Error
      </button>
      {NotificationComponent}
    </div>
  );
}

export default App;
