import { useState, useEffect } from "react";
import FriendCard from "../components/FriendCard";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const data = [
        {
          id: 1,
          name: "Rahim",
          picture: "https://i.pravatar.cc/100?img=1",
          days_since_contact: 62,
          status: "almost-due",
          tags: ["work"],
        },
        {
          id: 2,
          name: "Karim",
          picture: "https://i.pravatar.cc/100?img=2",
          days_since_contact: 42,
          status: "overdue",
          tags: ["family"],
        },
        {
          id: 3,
          name: "Sakib",
          picture: "https://i.pravatar.cc/100?img=3",
          days_since_contact: 10,
          status: "on-track",
          tags: ["work"],
        },
        {
          id: 4,
          name: "Hasan",
          picture: "https://i.pravatar.cc/100?img=4",
          days_since_contact: 15,
          status: "overdue",
          tags: ["hobby", "travel"],
        },
        ...Array.from({ length: 8 }, (_, i) => ({
          id: i + 5,
          name: "Friend " + (i + 5),
          picture: `https://i.pravatar.cc/100?img=${i + 5}`,
          days_since_contact: 20 + i,
          status:
            i % 3 === 0
              ? "on-track"
              : i % 2 === 0
              ? "overdue"
              : "almost-due",
          tags: ["work"],
        })),
      ];

      setFriends(data);
      setLoading(false);
    }, 800);
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // FILTER LOGIC (status + tag)
  const filteredFriends =
    filter === "all"
      ? friends
      : ["on-track", "almost-due", "overdue"].includes(filter)
      ? friends.filter((f) => f.status === filter)
      : friends.filter((f) => f.tags?.includes(filter));

  return (
    <>
      {/* Hero */}
      <HeroSection />

      <div className="px-4 md:px-6 lg:px-8 py-6">

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Your Friends
          </h2>
          <p className="text-sm text-gray-500">
            Manage and track your connections
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 flex-wrap mb-6">

          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "all"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-200"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("on-track")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "on-track"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            On Track
          </button>

          <button
            onClick={() => setFilter("almost-due")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "almost-due"
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-yellow-50 text-yellow-700 border-yellow-200"
            }`}
          >
            Almost Due
          </button>

          <button
            onClick={() => setFilter("overdue")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "overdue"
                ? "bg-red-600 text-white border-red-600"
                : "bg-red-50 text-red-600 border-red-200"
            }`}
          >
            Overdue
          </button>

          <button
            onClick={() => setFilter("work")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "work"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-indigo-50 text-indigo-700 border-indigo-200"
            }`}
          >
            Work
          </button>

          <button
            onClick={() => setFilter("family")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "family"
                ? "bg-green-600 text-white border-green-600"
                : "bg-green-50 text-green-700 border-green-200"
            }`}
          >
            Family
          </button>

          <button
            onClick={() => setFilter("hobby")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "hobby"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-purple-50 text-purple-700 border-purple-200"
            }`}
          >
            Hobby
          </button>

          <button
            onClick={() => setFilter("travel")}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === "travel"
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-pink-50 text-pink-700 border-pink-200"
            }`}
          >
            Travel
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filteredFriends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </>
  );
}