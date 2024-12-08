import {create} from 'zustand';
import {Note} from '../types/types';

type NoteState = {
  notes: Note[];
  addNote: ({noteTitle, noteText}: Note) => Promise<void>;
};

const useNoteStore = create<NoteState>(set => ({
  notes: [],
  addNote: async note =>
    set(state => ({
      notes: [...state.notes, note],
    })),
  // editNote
  // deleteNote
}));
