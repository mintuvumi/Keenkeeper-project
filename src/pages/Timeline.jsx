import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";

// Filter import
import Filter from "../components/Filter";

// icons
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  // icon map
  const iconMap = {
    Call: callIcon,
    Text: textIcon,
    Video: videoIcon,
  };

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="p-6 max-w-2xl mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* Custom Filter */}
      <Filter filter={filter} setFilter={setFilter} />

      {/* TIMELINE LIST */}
      <div className="space-y-3">

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-base-200 p-4 rounded-xl shadow-sm flex items-start gap-4"
          >
            {/*ICON IMAGE */}
            <img
              src={iconMap[item.type]}
              alt={item.type}
              className="w-6 h-6 mt-1"
            />

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
