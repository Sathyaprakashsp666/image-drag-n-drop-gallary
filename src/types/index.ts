export interface Document {
  type: string;
  title: string;
  position: number;
}

export interface CardProps {
  doc: {
    type: string;
    title: string;
  };
  index: number;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDragEnter: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onClick: (type: string) => void;
}

export interface CardGridProps {
  data: Document[];
  onUpdate: (updatedData: Document[]) => void;
  onClick: (type: string) => void;
  setIsSaving: (isSaving: boolean) => void;
}

export interface OverlayProps {
  imageType: string;
  onClose: () => void;
}
