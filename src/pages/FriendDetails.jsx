import { useParams, useNavigate } from "react-router-dom";
import friends from "../data/friends.json";

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) {
    return <h1 className="p-6">Friend Not Found</h1>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">

      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-sm mb-4"
      >
        ← Back
      </button>

      <div className="card bg-base-200 p-6 text-center">

        <img
          src={friend.picture}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold">{friend.name}</h2>
        <p className="text-gray-500">{friend.email}</p>

        <p className="mt-2">
          📅 {friend.days_since_contact} days since last contact
        </p>

        <p className="mt-2">
          🎯 Goal: {friend.goal} days
        </p>

        <p className="mt-2">
          ⏰ Next Contact: {friend.next_due_date}
        </p>

        <p className="mt-4">{friend.bio}</p>

        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span key={i} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}