
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Button from "./components/Button"

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
    fetchCards();
  }, []);

  return (
    <>
  
      <Navbar brand="Sakura Tarot" />

      <div className="global-container">
  
        <div className="container1">

          <Cards cards={cards} />

        </div>
        <div class="right">
        <div id="result-card">
          
          <p id="title-result">TÚ RESULTADO</p>
         
          <p id="result"> </p>
          <Button />
   
        </div>
        <div class="witch">
  
    </div>
        </div>
      </div>

    </>
  );
}

export default App;
