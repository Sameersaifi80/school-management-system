import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-black to-cyan-900 flex flex-col items-center justify-center">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-30"></div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-orange-400">ERROR 404</h1>

        <h2 className="text-3xl md:text-4xl font-bold text-orange-300">LOST IN SPACE</h2>
        <Link to="/dashboard"className="inline-block mt-6 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 duration-300">Back to Home
        </Link>
      </div>

      {/* Astronaut */}
      <div className="z-10 mt-20 animate-bounce">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
          alt="astronaut"
          className="w-40 md:w-54"
        />
      </div>

      {/* Planet */}
      <div className="absolute bottom-[-130px] w-[500px] h-[500px] bg-red-600 rounded-full opacity-80">
        <div className="absolute top-20 left-24 w-16 h-16 bg-red-500 rounded-full"></div>
        <div className="absolute top-40 right-28 w-20 h-20 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-14 h-14 bg-red-500 rounded-full"></div>
      </div>

      {/* Stars */}
      <div className="absolute top-24 left-20 text-yellow-400 text-3xl">
        ✦
      </div>

      <div className="absolute top-60 right-40 text-pink-400 text-2xl">
        ✦
      </div>

      <div className="absolute bottom-72 left-44 text-white text-2xl">
        ✦
      </div>

      <div className="absolute top-1/2 right-20 text-orange-300 text-3xl">
        ✦
      </div>
    </div>
  );
}