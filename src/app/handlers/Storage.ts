export interface Note {
  id: number;
  title: string;
  description?: string;
}

export class Storage {
  private static storageLocation = "ns-notes";

  public static getSavedNotes = () => {
    const savedNotes: Array<Note> = JSON.parse(
      localStorage.getItem(this.storageLocation) || "[]"
    );
    return savedNotes;
  };

  public static getNotes = () => {
    const savedNotes = this.getSavedNotes();

    return savedNotes;
  };

  public static addNote = (content: string) => {
    const notes = this.getNotes();
    notes.push({
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,
      title: content,
    });

    localStorage.setItem(this.storageLocation, JSON.stringify(notes));

    return notes;
  };

  public static editNote = () => {};

  public static deleteNote = (id: number) => {
    const notes = this.getNotes();
    const newNotes = notes.filter((note) => note.id !== id);

    localStorage.setItem(this.storageLocation, JSON.stringify(newNotes));

    return newNotes;
  };
}
