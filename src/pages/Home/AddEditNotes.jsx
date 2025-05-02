import React from "react";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          placeholder="title"
          className="text-sm text-slate-950 outline-none bg-fuchsia-50 p-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          placeholder="content"
          className="text-sm text-slate-950 outline-none bg-fuchsia-50 p-2 rounded"
          rows={10}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput />
      </div>

      <button className="bg-slate-400 text-white font-semibold rounded-full mt-4 px-6 py-2" onClick={()=>{}}>ADD</button>
    </div>
  );
};

export default AddEditNotes;
