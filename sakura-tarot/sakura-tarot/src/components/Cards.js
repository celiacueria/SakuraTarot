import React from "react";



const Cards = ({ cards = [] }) => {


  // const pulsar = () => {
  //   this.setState({showText: true})
  // };

  cards.sort(() => Math.random() - 0.5);
  let i = 0;


  return (

    <div className="row">
      {cards.map((item, index, {trial}) => (
        <div key={index} className="col">

          <div className="card">

            <img id={index} src={item.cardsReverse.sakuraReverse} alt="" />
            <button className="btn btn-dark" onClick={() => {
              if (i < 3) {
                i++;
                document.getElementById(index).src = item.sakuraCard;
                document.getElementById("result").innerHTML += "</br>   " + item.meaning;
              }
            }}

           
              
            >
              {item.kanji}
              
            </button>
          </div>
        </div>
      ))}
     
    </div>
    
  );

};


export default Cards;
