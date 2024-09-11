import React, { useState } from "react";
import Card from "./Card";
import { CardGridProps } from "../types";

const CardGrid: React.FC<CardGridProps> = ({
  data,
  onUpdate,
  onClick,
  setIsSaving,
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (
    _e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setDraggedIndex(index);
    setIsSaving(true);
  };

  const handleDragEnter = (
    _e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    if (index !== draggedIndex) {
      const newItems = [...data];
      const draggedItem = newItems.splice(draggedIndex!, 1)[0];
      newItems.splice(index, 0, draggedItem);

      setDraggedIndex(index);
      onUpdate(newItems);
    }
  };

  const handleDragOver = (_e: React.DragEvent<HTMLDivElement>) => {
    _e.preventDefault();
  };

  const handleDrop = () => {
    const updatedItems = data.map((item, idx) => ({
      ...item,
      position: idx,
    }));

    onUpdate(updatedItems);
  };

  return (
    <div className="card-grid">
      {data.map((doc, index) => (
        <Card
          key={doc.type}
          doc={doc}
          index={index}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default CardGrid;
