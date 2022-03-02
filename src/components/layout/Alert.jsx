import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import AlertContext from "../context/alert/AlertContext";
function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && <FaTimes />}
        <p className="flex-1 text-base font-semibold leading-7 text-black">
          {alert.msg}
        </p>
      </p>
    )
  );
}

export default Alert;
