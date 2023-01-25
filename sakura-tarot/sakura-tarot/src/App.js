import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import './index.css';


function App() {
  const [cards, setCards] = useState([]); //Se almacenan las cartas
  const initialUrl =
    "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

  const fetchCards = () => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    fetchCards(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Sakura Tarot" />

      <div className="container">
        <Cards cards={cards} pulsar  />
        
      </div>
    </>
  );
}

export default App;
