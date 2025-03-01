/**
 * useToats hook
 */

import { Bounce, toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

import DefaultToastContainer from "./DefaultToastContainer";

const SUCCESS_TOAST_CONFIG: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

const useToast = () => {
  const createSuccessToast = (message: string) =>
    toast(message, SUCCESS_TOAST_CONFIG);

  return {
    DefaultToastContainer,
    createSuccessToast,
  };
};

export default useToast;
