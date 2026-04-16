export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 md:py-12 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">

        <h2 className="text-2xl md:text-4xl font-bold">KeenKeeper</h2>

        <p className="mt-3 text-xs md:text-sm text-gray-200 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mt-6">
          <p className="mb-2 text-sm">Social Links</p>
          <div className="flex justify-center gap-3">
            <button className="btn btn-circle btn-xs md:btn-sm bg-white text-black">O</button>
            <button className="btn btn-circle btn-xs md:btn-sm bg-white text-black">f</button>
            <button className="btn btn-circle btn-xs md:btn-sm bg-white text-black">X</button>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 border-t border-gray-500 pt-5 gap-3">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
