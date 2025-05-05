import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "../../components/Input/TagInput";

const AddEditNotes = (noteData, type, onClose) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  // Add Note
  const addNewNote = async () => {};

  // Edit Note
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div>
      <button
        className="realative w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label text-fuchsia-900 font-semibold">
          TITLE
        </label>
        <input
          type="text"
          className="text-sm text-slate-950 outline-none bg-fuchsia-50 p-2 rounded"
          placeholder="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-fuchsia-900 font-semibold">
          CONTENT
        </label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-fuchsia-50 p-2 rounded"
          placeholder="content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label text-fuchsia-900 font-semibold">
          TAGS
        </label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-300 text-xs pt-4">{error}</p>}

      <button
        className="bg-slate-400 text-white font-semibold rounded-full mt-4 px-6 py-2"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
