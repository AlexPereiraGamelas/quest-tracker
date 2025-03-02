/**
 * useToats hook
 */

import { Bounce, toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

import DefaultToastContainer from "./DefaultToastContainer";
import { useCallback } from "react";

const DEFAULT_TOAST_OPTIONS: Partial<ToastOptions> = {
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

const SUCCESS_TOAST_CONFIG: ToastOptions = {
  ...DEFAULT_TOAST_OPTIONS,
  type: "success",
};

const ERROR_TOAST_CONFIG: ToastOptions = {
  ...DEFAULT_TOAST_OPTIONS,
  type: "error",
};

const useToast = () => {
  const createSuccessToast = useCallback(
    (message: string) => toast(message, SUCCESS_TOAST_CONFIG),
    []
  );

  const createErrorToast = useCallback(
    (message: string) => toast(message, ERROR_TOAST_CONFIG),
    []
  );

  return {
    DefaultToastContainer,
    createSuccessToast,
    createErrorToast,
  };
};

export default useToast;
