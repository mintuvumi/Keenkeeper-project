import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusStyle = {
    overdue: "bg-red-100 text-red-600 border border-red-200",
    "on-track": "bg-blue-100 text-blue-600 border border-blue-200",
    "almost-due": "bg-yellow-100 text-yellow-700 border border-yellow-200",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white shadow-sm rounded-2xl p-4 cursor-pointer text-center hover:shadow-lg transition duration-300 border border-gray-100"
    >
      <div className="flex justify-center">
        <img
          src={friend.picture}
          alt="friend"
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      <h2 className="font-semibold text-gray-800 mt-2">
        {friend.name}
      </h2>

      <p className="text-xs text-gray-500 mt-1">
        Last contact: {friend.days_since_contact} days ago
      </p>

      <div className="flex flex-wrap justify-center gap-1 mt-3">
        {friend.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-[10px] rounded-full bg-gray-100 text-gray-600 border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyle[friend.status]}`}
        >
          {friend.status === "on-track"
            ? "On Track"
            : friend.status === "almost-due"
            ? "Almost Due"
            : "Overdue"}
        </span>
      </div>
    </div>
  );
}