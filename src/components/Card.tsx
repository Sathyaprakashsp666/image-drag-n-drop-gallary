import React, { useState } from "react";
import "../styles/Card.css";
import { CardProps } from "../types";
import loadingIcon from "../../public/assets/6-dots-rotate.svg";

type ThumbnailType =
  | "bank-draft"
  | "bill-of-lading"
  | "invoice"
  | "bank-draft-2"
  | "bill-of-lading-2";

const Card: React.FC<CardProps> = ({
  doc,
  index,
  handleDragStart,
  handleDragEnter,
  handleDragOver,
  handleDrop,
  onClick,
}) => {
  const [loading, setLoading] = useState(true);

  const thumbnailMap: Record<ThumbnailType, string> = {
    "bank-draft": "/assets/bank-draft-thumbnail.png",
    "bill-of-lading": "/assets/bill-of-lading-thumbnail.png",
    invoice: "/assets/invoice-thumbnail.png",
    "bank-draft-2": "/assets/bank-draft-2-thumbnail.png",
    "bill-of-lading-2": "/assets/bill-of-lading-2-thumbnail.png",
  };

  const thumbnailSrc = thumbnailMap[doc.type as ThumbnailType];

  return (
    <div
      className="card"
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragEnter={(e) => handleDragEnter(e, index)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, index)}
      onClick={() => onClick(doc.type)}
    >
      {loading && (
        <div className="spinner">
          <img src={loadingIcon} alt={doc.title} />
        </div>
      )}
      <img
        src={thumbnailSrc}
        alt={doc.title}
        onLoad={() => setLoading(false)}
      />
      <h3>{doc.title}</h3>
    </div>
  );
};

export default Card;
