# Document Grid with Drag-and-Drop and Detail Overlay

## Overview

This project is a React and TypeScript application that displays a grid of document cards with drag-and-drop functionality and a detail overlay. Users can view and reorder documents, and see a loading spinner during data operations.

## Features

- **Drag-and-Drop**: Reorder documents by dragging and dropping cards.
- **Detail Overlay**: Click a card to view a larger image in an overlay.
- **Loading Indicators**: Display a spinner during data fetches and saves.
- **Responsive Design**: Adapt the layout to different screen sizes.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/document-grid.git
cd document-grid
npm install
npm run dev
```

## Communication and Thought Process

For this project, my approach was focused on creating a clean and efficient front-end application using React and TypeScript:

- Component Design: I developed reusable components such as CardGrid, Card, and Overlay to maintain a well-organized codebase.
- State Management: React hooks (useState and useEffect) were utilized to handle data fetching, saving, and UI updates effectively.
- Drag-and-Drop: Implemented drag-and-drop functionality to allow users to reorder documents seamlessly.
- Loading Indicators: Added visual feedback during data fetching and saving operations to improve user experience.
- Responsive Layout: Ensured the layout adapts to various screen sizes using CSS.
- The project emphasizes a clear code structure, user-friendly design, and performance, making it both maintainable and extendable for future enhancements.
