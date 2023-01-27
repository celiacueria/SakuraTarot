import React from "react";



const Cards = ({ cards = [] }) => {

  let sort = cards.sort(() => Math.random() - 0.5)
  let slice = sort.slice(0, 20)
  let i = 0;


  return (

    <div className="row">
      {slice.map((item, index) => (
        <div key={index} className="col">

          <div className="card">

            <img id={index} src={item.cardsReverse.sakuraReverse} alt="" onClick={() => {
              if (i < 3) {
                i++;
                document.getElementById(index).src = item.sakuraCard;
                document.getElementById("result").innerHTML += "</br>   " + item.meaning;
              }
            }} />
          </div>
        </div>
      ))}
    </div>
  );

};


export default Cards;
