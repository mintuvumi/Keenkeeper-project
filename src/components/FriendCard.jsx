import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusStyle = {
    overdue: "badge bg-red-100 text-red-600",
    "on-track": "badge bg-green-100 text-green-600",
    "almost-due": "badge bg-yellow-100 text-yellow-700",
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white shadow rounded-xl p-4 cursor-pointer flex flex-col items-center justify-center text-center hover:shadow-lg transition"
    >
      <img
        src={friend.picture}
        className="w-16 h-16 rounded-full mb-2"
        alt="friend"
      />

      <h2 className="font-bold">{friend.name}</h2>

      <p className="text-sm text-gray-500">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex gap-1 flex-wrap mt-2 justify-center">
        {friend.tags?.map((tag, i) => (
          <span
            key={i}
            className="badge bg-blue-100 text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <span className={`mt-2 ${statusStyle[friend.status]}`}>
        {friend.status}
      </span>
    </div>
  );
}
