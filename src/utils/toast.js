import { toast } from "react-toastify";

const successToast = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const notificationToast = (msg) => {
  return toast(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    render: ({ closeToast }) => (
      <div className="notification-toast">
        <FaInfoCircle className="toast-icon" /> {/* Example icon */}
        <div className="toast-message">{msg}</div>
      </div>
    ),
  });
};

const errorToast = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export { successToast, errorToast, notificationToast };
