import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    if (type === "Video") return "🎥";
  };

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);

  return (
    <div className="p-6 max-w-2xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* ✅ FILTER BOX (Shadow + সুন্দর UI) */}
      <div className="mb-6">
        <select
          className="w-full px-4 py-3 rounded-xl border shadow-md focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">📞 Call</option>
          <option value="Text">💬 Text</option>
          <option value="Video">🎥 Video</option>
        </select>
      </div>

      {/* ✅ TIMELINE LIST */}
      <div className="space-y-3">

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-base-200 p-4 rounded-xl shadow-sm flex items-start gap-4"
          >
            {/* ICON LEFT */}
            <div className="text-xl mt-1">
              {getIcon(item.type)}
            </div>

            {/* CONTENT */}
            <div className="text-left">
              <h2 className="font-semibold text-base">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500">
                {item.date} • {item.time}
              </p>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No timeline data found
          </p>
        )}
      
      </div>

    </div>
  );
}