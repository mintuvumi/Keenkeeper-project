import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState } from "react";

export default function Stats() {
  const { timeline } = useTimeline();
  const [activeIndex, setActiveIndex] = useState(null);

  // Count data
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    counts[item.type]++;
  });

  const data = [
    { name: "Text", value: counts.Text, color: "#7c3aed" },
    { name: "Call", value: counts.Call, color: "#16a34a" },
    { name: "Video", value: counts.Video, color: "#065f46" },
  ];

  return (
    <div className="px-4 md:px-8 py-10">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="card bg-base-200 p-6 flex flex-col items-center">

       <PieChart width={260} height={260}>
  <Pie
    data={data}
    dataKey="value"
    innerRadius={80}        // 🔥 bigger hole (clean look)
    outerRadius={100}       // ring thickness fix
    paddingAngle={6}        // 🔥 gap between segments
    cornerRadius={20}       // 🔥 rounded ends (image look)
    onMouseEnter={(_, index) => setActiveIndex(index)}
    onMouseLeave={() => setActiveIndex(null)}
    isAnimationActive={true}
    animationDuration={1200} // smooth rotate animation
  >
    {data.map((entry, index) => (
      <Cell
        key={index}
        fill={entry.color}
        style={{
          transform:
            activeIndex === index ? "scale(1.08)" : "scale(1)",
          transformOrigin: "center",
          transition: "0.3s ease",
        }}
      />
    ))}
  </Pie>
</PieChart>


        {/* Text (Hover based) */}
        <div className="mt-4 text-center h-6">
          {activeIndex !== null ? (
            <p
              className="font-semibold"
              style={{ color: data[activeIndex].color }}
            >
              {data[activeIndex].name}
            </p>
          ) : (
            <p className="text-gray-400 text-sm">
              Hover on chart
            </p>
          )}
        </div>

        {/* 🔥 Legend (Color match) */}
        <div className="flex gap-6 mt-4 text-sm">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: item.color }}
              ></span>
              {item.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
