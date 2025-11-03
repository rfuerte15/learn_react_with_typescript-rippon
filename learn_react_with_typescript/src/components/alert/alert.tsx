import "./alert.css";
import { useState, type ReactNode } from "react";

type AlertProps = {
  type: string;
  heading: string;
  closable?: boolean;
  children: ReactNode;
  onClose?: () => void;
};

function Alert({
  type,
  heading,
  closable,
  children,
  onClose = () => console.log("onClose triggered"),
}: AlertProps) {
  const [visibility, setVisibility] = useState(true);
  const handleCloseClick = () => {
    setVisibility(false);
    if (onClose) {
      onClose();
    }
  };

  if (!visibility) {
    return null;
  }

  console.log(`closable: ${closable}`);
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "Warning" ? "⚠️" : "ℹ️"}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="close" onClick={handleCloseClick}>
          <span role="img" aria-label="close">
            ❌
          </span>
        </button>
      )}

      <div>{children}</div>
    </div>
  );
}

export default Alert;
