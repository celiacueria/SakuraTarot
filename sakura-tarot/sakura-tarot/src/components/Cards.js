import React from "react";

const Cards = ({ cards = [] }) => {
  let sort = cards.sort(() => Math.random() - 0.5);
  let slice = sort.slice(0, 18);
  let i = 0;

  return (
    <div className="row">
      {slice.map((item, index) => (
        <div className="cards">
          <img
            id={index}
            src={item.cardsReverse.sakuraReverse}
            alt=""
            onClick={() => {
              if (i < 1) {
                i++;
                document.getElementById(index).src = item.sakuraCard;
                document.getElementById("result").innerHTML +=
                  "</br><span class='time'>   Pasado: </span>" + item.meaning;
              } else if (i < 2) {
                i++;
                document.getElementById(index).src = item.sakuraCard;
                document.getElementById("result").innerHTML +=
                  "</br><span class='time'>   Presente: </span>" + item.meaning;
              } else if (i < 3) {
                i++;
                document.getElementById(index).src = item.sakuraCard;
                document.getElementById("result").innerHTML +=
                  "</br><span class='time'>   Futuro : </span>" + item.meaning;
              } else if (i >= 3) {
                alert("No puedes seleccionar más cartas");
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
