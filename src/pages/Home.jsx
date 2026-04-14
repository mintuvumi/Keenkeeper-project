import friends from "../data/friends.json";
import FriendCard from "../components/FriendCard";

export default function Home() {
  return (
    <div className="p-6">
      
      {/* Banner */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500">
          Your personal shelf of meaningful connections
        </p>

        <button className="btn btn-success mt-4">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card bg-base-200 p-4 text-center">10<br/>Total</div>
        <div className="card bg-base-200 p-4 text-center">3<br/>On Track</div>
        <div className="card bg-base-200 p-4 text-center">6<br/>Need Attention</div>
        <div className="card bg-base-200 p-4 text-center">12<br/>Interactions</div>
      </div>

      {/* Friends */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}