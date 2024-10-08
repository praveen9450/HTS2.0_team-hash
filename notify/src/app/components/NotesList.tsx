// components/NotesList.tsx
import React, { useEffect } from "react";
import NoteCard from "./NoteCard";

interface Note {
  note_title: string;
  page_number: number;
  content: string;
}

interface NotesListProps {
  notes: Note[];
  selectedProject: string;
}
const NotesList: React.FC<NotesListProps> = ({ notes, selectedProject }) => {
  useEffect(() => {
    console.log(notes)
  }, [])
  return (
    <>
      {notes.map((note) => (
        <NoteCard key={note.page_number} note={note} selectedProject={selectedProject} />
      ))}
    </>
  );
};

export default NotesList;
