import { useState } from "react";

// icons
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const options = [
  { label: "All", value: "All", icon: null },
  { label: "Call", value: "Call", icon: callIcon },
  { label: "Text", value: "Text", icon: textIcon },
  { label: "Video", value: "Video", icon: videoIcon },
];

export default function Filter({ filter, setFilter }) {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === filter);

  return (
    <div className="relative mb-6">

      {/* Selected Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-xl border shadow-md cursor-pointer flex items-center justify-between bg-white"
      >
        <div className="flex items-center gap-2">
          {selected.icon && (
            <img src={selected.icon} className="w-5 h-5" />
          )}
          <span>{selected.label}</span>
        </div>

        <span>▼</span>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute w-full mt-2 bg-white shadow-lg rounded-xl z-50">

          {options.map((item) => (
            <div
              key={item.value}
              onClick={() => {
                setFilter(item.value);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.icon && (
                <img src={item.icon} className="w-5 h-5" />
              )}
              {item.label}
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
