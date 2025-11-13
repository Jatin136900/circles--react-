import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Color() {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("#00e4b5");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, { text: note, color }]);
    setNote("");
  };

  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen flex bg-[#d6dde8] p-6 gap-6">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col items-center gap-4">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="// Write a note here"
          className="w-3/4 h-48 p-4 rounded-xl border border-gray-300 shadow-md bg-white focus:outline-none"
        />

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-20 h-10 border rounded cursor-pointer shadow"
        />

        <button
          onClick={addNote}
          className="px-6 py-2 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-full shadow-md cursor-pointer"
        >
          Add note
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Your Notes</h1>

        {notes.length === 0 ? (
          <p className="text-gray-500 text-center">You have not added a note yet.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {notes.map((item, index) => (
              <li
                key={index}
                className="relative p-4 rounded-lg shadow text-black"
                style={{ backgroundColor: item.color }}
              >
                {/* DELETE (CROSS) ICON */}
                <button
                  onClick={() => deleteNote(index)}
                  className="absolute top-2 right-2 text-black text-xl font-bold hover:text-red-600"
                >
                  <MdDelete />
                </button>

                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
