export default function HeroSection() {
  return (
    <div className="bg-base-100 py-8 md:py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          Friends to keep close in your life
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most
        </p>

        <button className="btn btn-success mt-4 md:mt-6">
          + Add a Friend
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-10">

          <div className="card bg-base-200 shadow-md p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">10</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Total Friends</p>
          </div>

          <div className="card bg-base-200 shadow-md p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">3</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">On Track</p>
          </div>

          <div className="card bg-base-200 shadow-md p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">6</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Need Attention</p>
          </div>

          <div className="card bg-base-200 shadow-md p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">12</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Interactions This Month</p>
          </div>

        </div>

      </div>
    </div>
  );
}
