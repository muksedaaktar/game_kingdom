// src/data/games.js
import pubgImg from "../assets/pubg.jpg";
import callImg from "../assets/call of duty.jpg";
import freeFire from "../assets/free fire.jpg";


export const games = [
  {
    id: "1",
    title: "Player Unknowns Battle Ground: PUBG",
    coverPhoto: pubgImg,
    category: "FPS",
    downloadLink: "https://www.pubgmobile.com/en-US/home.shtml",
    description:
      "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
    ratings: "4.7",
    developer: "Krafton",
    img: pubgImg
  },
  {
    id: "2",
    title: "Call of Duty: Mobile",
    coverPhoto: callImg,
    category: "FPS",
    downloadLink: "https://www.callofduty.com/mobile",
    description:
      "Call of Duty Mobile delivers intense multiplayer modes, battle royale action, and iconic maps from the COD franchise.",
    ratings: "4.5",
    developer: "Activision",
    img: callImg
  },
  {
    id: "3",
    title: "Free Fire: Battlegrounds",
    coverPhoto: freeFire,
    category: "Battle Royale",
    downloadLink: "https://ff.garena.com/en/",
    description:
      "Free Fire is a survival shooter game offering quick 10-minute battles, unique characters, and fast-paced gameplay.",
    ratings: "4.3",
    developer: "Garena",
    img: freeFire
  }
];