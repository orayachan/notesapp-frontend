import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTags();
    }
  };

  const addNewTags = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
            >
              # {tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3"></div>

      <input
        type="text"
        className="text-sm bg-transparent border border-slate-400 px-3 py-2 rounded outline-none"
        placeholder="Add tags"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button
        className="w-auto h-8 px-1 mt-2 flex items-center justify-center rounded border border-fuchsia-700"
        onClick={() => {
          addNewTags();
        }}
      >
        {" "}
        {inputValue}
        <MdAdd className="text-2xl text-fuchsia-700 hover:text-fuchsia-900" />
      </button>
    </div>
  );
};

export default TagInput;
