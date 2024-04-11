import { useState } from "react";
const DEFAULT_ALERT = {
  show: false,
  text: "",
  type: "danger",
};
const useAlert = () => {
  const [alert, setAlert] = useState(DEFAULT_ALERT);

  const showAlert = ({ text, type = "danger" }) => {
    setAlert({ show: true, text, type });
  };

  const hideAlert = () => {
    setAlert(DEFAULT_ALERT);
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
