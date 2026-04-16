export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-gray-600 mt-2">Page Not Found</p>

      <a
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Go Home
      </a>
    </div>
  );
}
