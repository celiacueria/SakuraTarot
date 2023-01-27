import React from "react";



const Cards = ({ cards = [] }) => {


  cards.sort(() => Math.random() - 0.5);
  let i = 0;

  return (

    <div className="cards-container">

      {cards.map((item, index) => (
        
        <div key={index} className="column">
          <div className="card">
            <img id={index} src={item.cardsReverse.sakuraReverse} alt="" onClick={() => {
              
              if (i < 3) {
                i++;
                document.getElementById(index).src = item.sakuraCard;
                document.getElementById("result").innerHTML += "</br>   " + item.meaning;
              
              }else{
                alert("No puedes seleccionar mas cartas. Reinicia el juego")
              }
            }} />
          </div>
        </div>
      ))}
     
    </div>
    
  );

};


export default Cards;
