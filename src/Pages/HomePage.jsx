import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pubgImg from "../assets/pubg.jpg"
import callImg from "../assets/call of duty.jpg"
import freeFire from "../assets/free fire.jpg"
import MyContainer from "../Components/Layout/MyContainer";
import { games } from "../data/Games";

const slides = [
  {
    id: "1",
    img: pubgImg ,
    title: "Player Unknowns Battle Ground (PUBG)"
  },
  {
    id: "2",
    img: callImg,
    title: "Call of Duty: Mobile"
  },
  {
    id: "3",
    img: freeFire,
    title: "Free Fire Battleground"
  }
];



export default function Home() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <MyContainer>
    <div className="w-full overflow-hidden">
     
      <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-2xl shadow-xl mb-16">
        <motion.img
          key={slides[index].id}
          src={slides[index].img}
          alt="banner"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full object-cover"
        />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60"
        >
          <ChevronRight size={28} />
        </button>
      </div>

    
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Popular Games</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {games
            .sort((a, b) => b.rating - a.rating)
            .map((game) => (
              <Link to={`/game/${game.id}`} key={game.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-300/40"
                >
                  <img src={game.img} alt={game.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{game.title}</h3>
                    <p className="text-sm mt-1 opacity-80">⭐ Rating: {game.ratings}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>
      </div>

      
      <div className="bg-purple-600 text-white py-16 px-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
        <p className="mb-6 text-white/90 max-w-[600px]">
          Subscribe to receive updates on new games, exclusive offers, and exciting events.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-[600px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-`grow` p-3 rounded-xl text-black bg-amber-100"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    </MyContainer>
  );
}
