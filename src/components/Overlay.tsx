import React, { useEffect } from "react";
import "../styles/Overlay.css";
import { OverlayProps } from "../types";

const Overlay: React.FC<OverlayProps> = ({ imageType, onClose }) => {
  const imageMap: Record<string, string> = {
    "bank-draft": "/assets/bank-draft-thumbnail.png",
    "bill-of-lading": "/assets/bill-of-lading-thumbnail.png",
    invoice: "/assets/invoice-thumbnail.png",
    "bank-draft-2": "/assets/bank-draft-2-thumbnail.png",
    "bill-of-lading-2": "/assets/bill-of-lading-2-thumbnail.png",
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageMap[imageType]} alt={imageType} />
      </div>
    </div>
  );
};

export default Overlay;
