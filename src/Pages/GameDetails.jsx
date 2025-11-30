import { useParams, Link } from "react-router-dom";
import { games } from "../data/games"; 
import { useEffect } from "react";
// import { useAuth } from "../context/AuthContext";

export default function GameDetails() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Game not found!</h2>
        <Link to="/" className="text-purple-400 mt-4 inline-block">Go back Home</Link>
      </div>
    );
  }

  useEffect(() => {
  document.title = "Game Details | Game Kingdom";
  }, []);


  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <p className="text-gray-700">{game.description}</p>

          <p className="font-semibold">Category: {game.category}</p>
          <p className="font-semibold">Developer: {game.developer}</p>
          <p className="font-semibold">Rating: ⭐ {game.ratings}</p>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}