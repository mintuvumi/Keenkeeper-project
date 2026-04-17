// import images
import logo from "../assets/logo-xl.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/Twitter.png";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 md:py-12 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/*Logo Image */}
        <img
          src={logo}
          alt="KeenKeeper Logo"
          className="mx-auto w-28 md:w-36"
        />

        {/* Description */}
        <p className="mt-3 text-xs md:text-sm text-gray-200 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/*Social Links */}
        <div className="mt-6">
          <p className="mb-2 text-sm">Social Links</p>

          <div className="flex justify-center gap-4">

            {/* Instagram */}
            <img
              src={instagram}
              alt="Instagram"
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80"
            />

            {/* Facebook */}
            <img
              src={facebook}
              alt="Facebook"
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80"
            />

            {/* Twitter */}
            <img
              src={twitter}
              alt="Twitter"
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80"
            />

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 border-t border-gray-500 pt-5 gap-3">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

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
