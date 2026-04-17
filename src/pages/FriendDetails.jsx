import { useParams, useNavigate } from "react-router-dom";
import friends from "../data/friends";
import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";

// react icons
import { FaClock, FaArchive, FaTrash } from "react-icons/fa";

// assets icons
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return <h1 className="p-6">Friend Not Found</h1>;
  }

  // handle click
  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added to timeline`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm mb-6"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="card bg-base-200 p-6 text-center shadow flex flex-col items-center">

          <img
            src={friend.picture}
            className="w-24 h-24 rounded-full mb-3"
          />

          <h2 className="text-xl font-bold">{friend.name}</h2>

          <p className="text-sm text-gray-500 mb-2">
            {friend.email}
          </p>

          <div className="badge badge-error mb-2">
            Overdue
          </div>

          <div className="flex justify-center gap-2 flex-wrap mb-2">
            {friend.tags.map((tag, i) => (
              <span key={i} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>

          <p className="italic text-sm text-gray-500">
            {friend.bio}
          </p>

          {/*ACTION BUTTONS icons added) */}
          <div className="mt-4 flex flex-col items-center gap-2 w-full">

            <button className="btn btn-outline w-full max-w-xs flex gap-2 items-center justify-center">
              <FaClock /> Snooze 2 Weeks
            </button>

            <button className="btn btn-outline w-full max-w-xs flex gap-2 items-center justify-center">
              <FaArchive /> Archive
            </button>

            <button className="btn btn-error w-full max-w-xs flex gap-2 items-center justify-center">
              <FaTrash /> Delete
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4">

          {/* TOP STATS */}
          <div className="grid grid-cols-3 gap-4">

            <div className="card bg-base-200 p-4 text-center shadow">
              <h2 className="text-2xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="card bg-base-200 p-4 text-center shadow">
              <h2 className="text-2xl font-bold">
                {friend.goal}
              </h2>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="card bg-base-200 p-4 text-center shadow">
              <h2 className="text-md font-bold">
                {friend.next_due_date}
              </h2>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>

          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="card bg-base-200 p-4 shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                Relationship Goal
              </h3>
              <button className="btn btn-xs">Edit</button>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Connect every <b>{friend.goal} days</b>
            </p>
          </div>

          {/* image icons */}
          <div className="card bg-base-200 p-4 shadow">
            <h3 className="font-semibold mb-3">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <button
                className="btn flex flex-col gap-1 items-center"
                onClick={() => handleAction("Call")}
              >
                <img src={callIcon} className="w-6 h-6" />
                Call
              </button>

              <button
                className="btn flex flex-col gap-1 items-center"
                onClick={() => handleAction("Text")}
              >
                <img src={textIcon} className="w-6 h-6" />
                Text
              </button>

              <button
                className="btn flex flex-col gap-1 items-center"
                onClick={() => handleAction("Video")}
              >
                <img src={videoIcon} className="w-6 h-6" />
                Video
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
