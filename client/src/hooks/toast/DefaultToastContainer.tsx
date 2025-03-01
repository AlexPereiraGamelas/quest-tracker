/**
 * DefaultToastContainer
 */
import { ToastContainer, Bounce } from "react-toastify";

const DefaultToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      theme="light"
      transition={Bounce}
    />
  );
};

export default DefaultToastContainer;
