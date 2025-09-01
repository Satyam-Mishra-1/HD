// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import NoteModal from "@/components/modals/note-modal";
// import Heading from "@/components/ui/heading";
// import ToolTipBox from "@/components/ui/tool-tip-box";
// import { NoteContext } from "@/providers/note-provider";
// import { Note } from "@/types";

// import NoteItem from "./Noteitem";

// const Notes = () => {

//   const navigate = useNavigate();
//   const context = useContext(NoteContext);
//   const { notes, fetchNotes } = context;
//   const [open, setOpen] = useState(false)
//   const [modalProps, setModalProps] = useState<Note | null>(null)

//   const openModal = (data: Note | null) => {
//     // console.log(data);
//     setModalProps(data)
//     setOpen(true)
//   }

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       fetchNotes();
//     } else {
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <>
//       <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

//       <div className="container">
//         <div className="flex items-center justify-between mt-10 mb-4">
//           <Heading title="DevNotes" description="Your notes on the cloud" />
//           <Button onClick={() => openModal(null)} size="sm" className="hidden sm:block">
//             Add a Note
//           </Button>
//           <ToolTipBox tip="Create a note">
//             <Button onClick={() => openModal(null)} size="icon" className="rounded-full sm:hidden">
//               <Plus />
//             </Button>
//           </ToolTipBox>

//         </div>
//         <Separator />

//         <div className="my-10">
//           <div className="absolute w-full px-4 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//             {notes === null ? (
//               <h5 className="text-lg font-medium">Loading...</h5>
//             ) :
//               notes.length < 1 && (
//                 <>
//                   <h4 className="mb-3 text-3xl font-bold">Sorry You don't have any notes.</h4>
//                   <h5 className="text-lg font-medium">Create a note, and it will appear here</h5>
//                 </>
//               )
//             }
//           </div>

//           <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 grid-rows-[masonary] grid-flow-dense">
//             {notes && notes.map((note) => {
//               return (
//                 <div key={note?._id}>
//                   <NoteItem note={note} updateNote={() => openModal(note)} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notes;









// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Trash } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import NoteModal from "@/components/modals/note-modal";
// import { NoteContext } from "@/providers/note-provider";
// import { Note } from "@/types";

// import NoteItem from "./Noteitem";

// const Notes = () => {
//   const navigate = useNavigate();
//   const context = useContext(NoteContext,userEmail,userName);
//   const { notes, fetchNotes } = context;
//   const [open, setOpen] = useState(false);
//   const [modalProps, setModalProps] = useState<Note | null>(null);

//   const openModal = (data: Note | null) => {
//     setModalProps(data);
//     setOpen(true);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       fetchNotes();
//     } else {
//       navigate("/login");
//     }
//   }, []);

//   const userEmail = localStorage.getItem("email") || "xxxxx@xxxx.com"; // Example email
//   const userName = localStorage.getItem("name") || "Jonas Kahnwald"; // Example name

//   return (
//     <>
//       <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

//       <div className="container mx-auto px-4 mt-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl font-semibold flex items-center gap-2">
//             <div className="w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
//             Dashboard
//           </h1>
//           <button
//             onClick={handleSignOut}
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Welcome Card */}
//         <div className="bg-white shadow rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-bold">Welcome, {userName} !</h2>
//           <p className="text-gray-600 mt-1">Email: {userEmail}</p>
//         </div>

//         {/* Create Note Button */}
//         <div className="flex justify-center mb-8">
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 w-full sm:w-64"
//             onClick={() => openModal(null)}
//           >
//             Create Note
//           </Button>
//         </div>

//         {/* Notes List */}
//         <div className="space-y-2">
//           {notes && notes.length > 0 ? (
//             notes.map((note) => (
//               <div
//                 key={note._id}
//                 className="flex justify-between items-center bg-white shadow rounded-lg p-4"
//               >
//                 <NoteItem note={note} updateNote={() => openModal(note)} />
//                 <button
//                   onClick={() => context.deleteNote?.(note._id)}
//                   className="text-gray-400 hover:text-red-500"
//                 >
//                   <Trash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="text-center mt-10">
//               {notes === null ? (
//                 <p className="text-gray-500">Loading...</p>
//               ) : (
//                 <>
//                   <h4 className="text-2xl font-bold mb-2">
//                     Sorry You don't have any notes.
//                   </h4>
//                   <p className="text-gray-600">
//                     Create a note, and it will appear here
//                   </p>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notes;





// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Trash } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import NoteModal from "@/components/modals/note-modal";
// import { NoteContext } from "@/providers/note-provider";
// import { Note } from "@/types";

// import NoteItem from "./Noteitem";

// const Notes = () => {
//   const navigate = useNavigate();
//   const { notes, fetchNotes, deleteNote, userName, userEmail } = useContext(NoteContext);

//   const [open, setOpen] = useState(false);
//   const [modalProps, setModalProps] = useState<Note | null>(null);

//   const openModal = (data: Note | null) => {
//     setModalProps(data);
//     setOpen(true);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

//       <div className="container mx-auto px-4 mt-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl font-semibold flex items-center gap-2">
//             <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
//             Dashboard
//           </h1>
//           <button
//             onClick={handleSignOut}
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Welcome Card */}
//         <div className="bg-white shadow rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-bold">Welcome, {userName || "Loading..."} !</h2>
//           <p className="text-gray-600 mt-1">Email: {userEmail || "Loading..."}</p>
//         </div>

//         {/* Create Note Button */}
//         <div className="flex justify-center mb-8">
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 w-full sm:w-64"
//             onClick={() => openModal(null)}
//           >
//             Create Note
//           </Button>
//         </div>

//         {/* Notes List */}
//         <div className="space-y-2">
//           {notes && notes.length > 0 ? (
//             notes.map((note) => (
//               <div
//                 key={note._id}
//                 className="flex justify-between items-center bg-white shadow rounded-lg p-4"
//               >
//                 <NoteItem note={note} updateNote={() => openModal(note)} />
//                 <button
//                   onClick={() => deleteNote?.(note._id)}
//                   className="text-gray-400 hover:text-red-500"
//                 >
//                   <Trash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="text-center mt-10">
//               {notes === null ? (
//                 <p className="text-gray-500">Loading...</p>
//               ) : (
//                 <>
//                   <h4 className="text-2xl font-bold mb-2">
//                     Sorry, you don't have any notes.
//                   </h4>
//                   <p className="text-gray-600">Create a note, and it will appear here</p>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notes;







// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Trash } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import NoteModal from "@/components/modals/note-modal";
// import { NoteContext } from "@/providers/note-provider";
// import { Note } from "@/types";

// import NoteItem from "./Noteitem";

// // ✅ Import your logo
// import Logo from "../../Logo_Icons/logoH.png"; // <-- make sure this path is correct

// const Notes = () => {
//   const navigate = useNavigate();
//   const { notes, fetchNotes, deleteNote, userName, userEmail } = useContext(NoteContext);

//   const [open, setOpen] = useState(false);
//   const [modalProps, setModalProps] = useState<Note | null>(null);

//   const openModal = (data: Note | null) => {
//     setModalProps(data);
//     setOpen(true);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

//       <div className="container mx-auto px-4 mt-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl font-semibold flex items-center gap-2">
//             {/* ✅ Replace spinner with logo */}
//             <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
//             Dashboard
//           </h1>
//           <button
//             onClick={handleSignOut}
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Welcome Card */}
//         <div className="bg-white shadow rounded-lg p-6 mb-6">
//           <h2 className="text-lg font-bold">Welcome, {userName || "Loading..."} !</h2>
//           <p className="text-gray-600 mt-1">Email: {userEmail || "Loading..."}</p>
//         </div>

//         {/* Create Note Button */}
//         <div className="flex justify-center mb-8">
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 w-full sm:w-64"
//             onClick={() => openModal(null)}
//           >
//             Create Note
//           </Button>
//         </div>

//         {/* Notes List */}
//         <div className="space-y-2">
//           {notes && notes.length > 0 ? (
//             notes.map((note) => (
//               <div
//                 key={note._id}
//                 className="flex justify-between items-center bg-white shadow rounded-lg p-4"
//               >
//                 <NoteItem note={note} updateNote={() => openModal(note)} />
//                 <button
//                   onClick={() => deleteNote?.(note._id)}
//                   className="text-gray-400 hover:text-red-500"
//                 >
//                   <Trash />
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="text-center mt-10">
//               {notes === null ? (
//                 <p className="text-gray-500">Loading...</p>
//               ) : (
//                 <>
//                   <h4 className="text-2xl font-bold mb-2">
//                     Sorry, you don't have any notes.
//                   </h4>
//                   <p className="text-gray-600">Create a note, and it will appear here</p>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notes;






import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import NoteModal from "@/components/modals/note-modal";
import { NoteContext } from "@/providers/note-provider";
import { Note } from "@/types";

import NoteItem from "./Noteitem";

// ✅ Import your logo
import Logo from "../../Logo_Icons/logoH.png"; // <-- make sure this path is correct

const Notes = () => {
  const navigate = useNavigate();
  const { notes, deleteNote, userName, userEmail } = useContext(NoteContext);

  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState<Note | null>(null);

  const openModal = (data: Note | null) => {
    setModalProps(data);
    setOpen(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <NoteModal isOpen={open} onClose={() => setOpen(false)} initialData={modalProps} />

      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
            Dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Out
          </button>
        </div>

        {/* Welcome Card */}
       <div className="bg-white border border-gray-400 shadow-md rounded-2xl p-6 m-5 transition hover:border-gray-700 hover:shadow-lg">
          <h2 className="text-lg font-bold">Welcome, {userName || "Loading..."} !</h2>
          <p className="text-gray-600 mt-1">Email: {userEmail || "Loading..."}</p>
        </div>


        {/* Create Note Button */}
        <div className="flex justify-center mb-8">
          <Button
            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-64"
            onClick={() => openModal(null)}
          >
            Create Note
          </Button>
        </div>

        {/* Notes List */}
        <div className="space-y-2">
          {notes && notes.length > 0 ? (
            notes.map((note) => (
              <div
                key={note._id}
                className="flex justify-between items-center bg-white border border-gray-400 shadow-md rounded-2xl p-5 transition hover:border-gray-700 hover:shadow-lg m-5"
              >
                <NoteItem note={note} updateNote={() => openModal(note)} />
                <button
                  onClick={() => deleteNote?.(note._id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center mt-10">
              {notes === null ? (
                <p className="text-gray-500">Loading...</p>
              ) : (
                <>
                  <h4 className="text-2xl font-bold mb-2">
                    Sorry, you don't have any notes.
                  </h4>
                  <p className="text-gray-600">Create a note, and it will appear here</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
