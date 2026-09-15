import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="shadow-lg p-6 rounded-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-5">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
        />

        <button className="bg-green-500 text-white w-full p-2 rounded">
          Register
        </button>

        <p className="mt-4 text-center">
          <Link to="/" className="text-blue-500">
            Back To Login
          </Link>
        </p>
      </div>
    </div>
  );
}