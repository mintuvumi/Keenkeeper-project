import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusColor = {
    overdue: "bg-red-200",
    "on-track": "bg-green-200",
    "almost-due": "bg-yellow-200"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className={`p-4 rounded-xl cursor-pointer ${statusColor[friend.status]}`}
    >
      <img
        src={friend.picture}
        className="w-16 h-16 rounded-full mb-2"
      />

      <h2 className="font-bold">{friend.name}</h2>
      <p>{friend.days_since_contact} days ago</p>

      <div className="flex gap-1 flex-wrap mt-2">
        {friend.tags.map((tag, i) => (
          <span key={i} className="badge badge-outline">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}