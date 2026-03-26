import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white grid place-items-center px-6">
      <div className="max-w-md w-full rounded-lg border border-red-500/30 bg-red-950/20 p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Something went wrong</h1>
        <p className="mt-3 text-gray-300">
          We couldn’t complete your request. Please try again.
        </p>
        <button
          className="mt-6 rounded-md bg-red-600 px-5 py-2 font-semibold hover:bg-red-700"
          onClick={() => navigate("/")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Error;
