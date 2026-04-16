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

  // ✅ filtering logic
  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* ✅ FILTER DROPDOWN */}
      <select
        className="select select-bordered mb-6"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

      {/* ✅ TIMELINE LIST */}
      <div className="space-y-3">
        {filteredData.map(item => (
          <div
            key={item.id}
            className="card bg-base-200 p-4 flex items-center gap-4 shadow"
          >
            <div className="text-2xl">
              {getIcon(item.type)}
            </div>

            <div>
              <h2 className="font-semibold">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500">
                {item.date} • {item.time}
              </p>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-gray-400 text-center">
            No data found
          </p>
        )}
      </div>

    </div>
  );
}