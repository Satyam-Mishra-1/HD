// import { FC, useState, createContext } from "react";
// import { toast } from "react-hot-toast";

// import { Note } from "@/types";

// const HOST = import.meta.env.VITE_HOST;



// interface InitialDataType {
//     notes: Note[] | null;
//     deleteNote: (id: string) => void;
//     fetchNotes: () => void;
// }

// const notes: Note[] = [];
// const initialData: InitialDataType = {
//     notes,
//     deleteNote: () => { },
//     fetchNotes: () => { },
// }

// export const NoteContext = createContext(initialData);



// interface NoteProviderProps {
//     children: React.ReactNode
// }

// const NoteProvider: FC<NoteProviderProps> = ({ children }) => {

//     const [notes, setNotes] = useState<Note[] | null>(null);

//     const headers: HeadersInit = {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token") || "",
//     };

//     const fetchNotes = async () => {
//         const headers: HeadersInit = {
//             "auth-token": localStorage.getItem("token") || "",
//         }
//         const response = await fetch(`${HOST}/api/notes/fetchallnotes`, {
//             method: "GET",
//             headers
//         });
//         const json = await response.json();
//         setNotes(json.notes);
//     };

//     const deleteNote = async (id: string) => {
//         const response = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
//             method: "DELETE",
//             headers,
//         });
//         const json = await response.json();
//         if (json.success) {
//             toast.success(json.message);
//             fetchNotes();
//         } else {
//             toast.error(json.message);
//         }
//     };

//     return (
//         <NoteContext.Provider
//             value={{ notes, deleteNote, fetchNotes }}
//         >
//             {children}
//         </NoteContext.Provider>
//     );
// };

// export default NoteProvider;






import { FC, useState, createContext, useEffect } from "react";
import { toast } from "react-hot-toast";

import { Note } from "@/types";

const HOST = import.meta.env.VITE_HOST;

interface InitialDataType {
  notes: Note[] | null;
  deleteNote: (id: string) => void;
  fetchNotes: () => void;
  userName: string | null;
  userEmail: string | null;
  fetchUser: () => void;
}

const initialData: InitialDataType = {
  notes: [],
  deleteNote: () => {},
  fetchNotes: () => {},
  userName: null,
  userEmail: null,
  fetchUser: () => {},
};

export const NoteContext = createContext(initialData);

interface NoteProviderProps {
  children: React.ReactNode;
}

const NoteProvider: FC<NoteProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token") || "",
  };

  const fetchNotes = async () => {
    try {
      const response = await fetch(`${HOST}/api/notes/fetchallnotes`, {
        method: "GET",
        headers,
      });
      const json = await response.json();
      setNotes(json.notes);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      const response = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers,
      });
      const json = await response.json();
      if (json.success) {
        toast.success(json.message);
        fetchNotes();
      } else {
        toast.error(json.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  // Fetch current user info
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch(`${HOST}/api/auth/getuser`, {
        headers: { "auth-token": token },
      });
      const data = await res.json();
      setUserName(data.name);
      setUserEmail(data.email);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  useEffect(() => {
    fetchNotes();
    fetchUser();
  }, []);

  return (
    <NoteContext.Provider
      value={{ notes, deleteNote, fetchNotes, userName, userEmail, fetchUser }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
