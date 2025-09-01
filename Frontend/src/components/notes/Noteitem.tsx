// import { FC, useState, useContext } from "react";
// import { Edit, Trash } from "lucide-react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import AlertModal from "@/components/modals/alert-modal";
// import ToolTipBox from "@/components/ui/tool-tip-box";
// import { NoteContext } from "@/providers/note-provider";
// import { Note } from "@/types";

// interface NoteitemProps {
//   note: Note;
//   updateNote: (note: Note) => void;
// }

// const Noteitem: FC<NoteitemProps> = ({ note, updateNote }) => {
//   const context = useContext(NoteContext);
//   const { deleteNote } = context;
//   const [open, setOpen] = useState(false)

//   const delete_Note = async (id: string) => {
//     deleteNote(id)
//     setOpen(false)
//   };

//   return (
//     <>
//       <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={() => delete_Note(note._id)} />

//       <Card className="w-full">
//         <CardContent>
//           <CardTitle className="font-bold break-words">{note.title}</CardTitle>
//           <div className="mt-5 text-base break-words">
//             {note.description}
//           </div>
//         </CardContent>
//       </Card>

//     </>
//   );
// };

// export default Noteitem;







import { FC, useState, useContext } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import AlertModal from "@/components/modals/alert-modal";
import { NoteContext } from "@/providers/note-provider";
import { Note } from "@/types";

interface NoteitemProps {
  note: Note;
  updateNote: (note: Note) => void;
}

const Noteitem: FC<NoteitemProps> = ({ note, updateNote }) => {
  const { deleteNote } = useContext(NoteContext);
  const [open, setOpen] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const delete_Note = async (id: string) => {
    deleteNote(id);
    setOpen(false);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => delete_Note(note._id)}
      />

      <Card
        className="w-full h-24 cursor-pointer transition flex items-center border-0 shadow-none"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        <CardContent className="text-center border-0 p-4">
          <CardTitle className="font-bold break-words">
            {note.title}
          </CardTitle>

          {showDescription && (
            <div className="mt-3 text-base break-words">
              {note.description}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Noteitem;
