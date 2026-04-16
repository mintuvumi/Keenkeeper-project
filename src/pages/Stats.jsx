import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";
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
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: "Text", value: counts.Text, color: "#7c3aed" },
    { name: "Call", value: counts.Call, color: "#16a34a" },
    { name: "Video", value: counts.Video, color: "#065f46" },
  ];

  // 🔥 Fix: prevent all zero issue (makes equal circle look)
  const total = data.reduce((sum, d) => sum + d.value, 0);

  const safeData =
    total === 0
      ? data.map((d) => ({ ...d, value: 1 })) // equal circle
      : data;

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
            data={safeData}
            dataKey="value"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={6}
            cornerRadius={20}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            isAnimationActive={true}
            animationDuration={1200}
          >
            {safeData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* 🔥 Hover info (FIXED) */}
        <div className="mt-4 text-center h-10">
          {activeIndex !== null ? (
            <div>
              <p
                className="font-semibold"
                style={{ color: safeData[activeIndex].color }}
              >
                {safeData[activeIndex].name}
              </p>

              {/* 🔥 COUNT SHOW FIX */}
              <p className="text-sm text-gray-600">
                Clicked: {data[activeIndex].value}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">
              Hover on chart
            </p>
          )}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 text-sm">
          {safeData.map((item, i) => (
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
