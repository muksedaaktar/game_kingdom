import React, { useEffect } from "react";

const Games = () => {
  useEffect(() => {
    document.title = "Games | Game Kingdom"; 
  }, []);

  return (
    <div className="w-full min-h-screen bg-purple-600 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-6">Our Games</h1>
      <p className="text-lg text-center max-w-xl">
        Welcome to the Game Kingdom! Explore our top games and enjoy your adventure.
      </p>
    </div>
  );
};

export default Games;
