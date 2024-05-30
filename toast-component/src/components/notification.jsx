import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

const iconStyles = { marginRight: "10px" };

const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};
import "./notification.css";

// eslint-disable-next-line react/prop-types
const Notification = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div className={`notification ${type}`}>
      {/* Icon */}
      {icons[type]}

      {/* Message */}
      {message}

      {/* Close button */}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default Notification;
