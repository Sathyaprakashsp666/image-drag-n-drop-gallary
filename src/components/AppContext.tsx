import React, { useState, useEffect } from "react";
import CardGrid from "./CardGrid";
import Overlay from "./Overlay";
import { Document } from "../types";
import loadingIcon from "../../public/assets/6-dots-rotate.svg";

const AppContent: React.FC = () => {
  const [data, setData] = useState<Document[]>([]);
  const [overlayImageType, setOverlayImageType] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [hasChanges, setHasChanges] = useState<boolean>(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch("/api/documents");
      const documents = await response.json();
      setData(documents);
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasChanges) {
        setIsSaving(true);
        fetch("/api/documents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then(() => {
            setLastSaved(new Date());
            setHasChanges(false);
          })
          .finally(() => {
            setIsSaving(false);
          });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [data, hasChanges]);

  const handleCardClick = (imageType: string) => {
    setOverlayImageType(imageType);
  };

  const handleCloseOverlay = () => {
    setOverlayImageType(null);
  };

  const handleUpdateData = (updatedData: Document[]) => {
    setData(updatedData);
    setHasChanges(true); // Mark that there are changes
  };
  console.log(isSaving);
  return (
    <>
      <div className="save-cont">
        Last saved:
        {lastSaved
          ? lastSaved.toLocaleTimeString()
          : new Date().toLocaleTimeString()}
        {isSaving && (
          <div>
            <img src={loadingIcon} alt="...loading" width="15px" />
          </div>
        )}
      </div>

      <div className="align-center">
        <CardGrid
          data={data}
          onUpdate={handleUpdateData}
          onClick={handleCardClick}
          setIsSaving={setIsSaving}
        />
      </div>

      {overlayImageType && (
        <Overlay imageType={overlayImageType} onClose={handleCloseOverlay} />
      )}
    </>
  );
};

export default AppContent;
