// import { useEffect, useState } from "react";

// export default function Notes() {
//   const [text, setText] = useState("");

//   // Load saved notes when page opens
//   useEffect(() => {
//     const savedNotes = localStorage.getItem("myNotes");
//     if (savedNotes !== null) {
//       setText(savedNotes);
//     }
//   }, []);

//   // Auto-save notes whenever text changes
//   useEffect(() => {
//     localStorage.setItem("myNotes", text);
//   }, [text]);

//   return (
//     <div className="min-h-screen bg-purple-800 p-6 flex justify-center items-start">
//       <div className="w-full max-w-3xl bg-purple-600 shadow-2xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-white mb-4 text-center">
//           Notes
//         </h1>

//         <textarea
//           className="w-full h-[70vh] p-4 
//                      bg-purple-900
//                      text-white
//                      border-2 border-purple-300
//                      rounded-xl
//                      focus:outline-none focus:ring-2 focus:ring-purple-200
//                      placeholder-white"
//           placeholder="Type your notes here..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// }
