import FriendCard from "../components/FriendCard";

export default function Home() {
  const friends = [
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
      days_since_contact: 62,
      status: "overdue",
      tags: ["family"],
    },
    {
      id: 3,
      name: "Sakib",
      picture: "https://i.pravatar.cc/100?img=3",
      days_since_contact: 62,
      status: "overdue",
      tags: ["work"],
    },
    {
      id: 4,
      name: "Hasan",
      picture: "https://i.pravatar.cc/100?img=4",
      days_since_contact: 62,
      status: "overdue",
      tags: ["hobby", "travel"],
    },

    // 8 more auto cards = total 12
    ...Array.from({ length: 8 }, (_, i) => ({
      id: i + 5,
      name: "Friend " + (i + 5),
      picture: `https://i.pravatar.cc/100?img=${i + 5}`,
      days_since_contact: 62,
      status: i % 2 === 0 ? "overdue" : "almost-due",
      tags: ["work"],
    })),
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">
        Your Friends
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
