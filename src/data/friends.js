const friends = [
  {
    id: 1,
    name: "David Kim",
    picture: "https://i.pravatar.cc/150?img=1",
    email: "david@example.com",
    days_since_contact: 62,
    status: "almost-due",
    tags: ["work"],
    bio: "Office friend",
    goal: 30,
    next_due_date: "2025-07-20"
  },
  {
    id: 2,
    name: "Emma Wilson",
    picture: "https://i.pravatar.cc/150?img=2",
    days_since_contact: 42,
    status: "overdue",
    tags: ["family"],
    goal: 30,
    next_due_date: "2025-07-25"
  },
  {
    id: 3,
    name: "Lisa Nakamura",
    picture: "https://i.pravatar.cc/150?img=3",
    days_since_contact: 10,
    status: "on-track",
    tags: ["work"],
    goal: 30,
    next_due_date: "2025-08-01"
  },

  // 🔥 extra auto generate (total 12)
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 4,
    name: "Friend " + (i + 4),
    picture: `https://i.pravatar.cc/150?img=${i + 4}`,
    days_since_contact: 20 + i,
    status: i % 2 === 0 ? "overdue" : "almost-due",
    tags: ["work"],
    goal: 30,
    next_due_date: "2025-08-10"
  }))
];

export default friends;
