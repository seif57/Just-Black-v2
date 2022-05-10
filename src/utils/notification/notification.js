import { toast } from "react-toastify";

export const notify = (message, type = "info") => {
  toast[type](message);
};
export const notifyError = (message) => {
  notify(message, "error");
};
export const notifySuccess = (message) => {
  notify(message, "success");
};
export const notifyWarning = (message) => {
  notify(message, "warning");
};
