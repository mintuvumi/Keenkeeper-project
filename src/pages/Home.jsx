import FriendCard from "../components/FriendCard";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import friends from "../data/friends";


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
    <>
      {/* 🔥 Hero Section */}
      <HeroSection />

      {/* 🔥 Friends Section */}
      <div className="px-4 md:px-6 lg:px-8 py-6">

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Your Friends
          </h2>
          <p className="text-sm text-gray-500">
            Manage and keep track of your important connections
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>

      {/* 🔥 Footer */}
      <Footer />
    </>
  );
}
