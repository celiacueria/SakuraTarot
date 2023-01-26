import React from "react";


const Cards = ({ cards = [] }) => {
  
  
  // const pulsar = () => {
  //   this.setState({showText: true})
  // };

  cards.sort(() => Math.random() - 0.5);

  return (
    
    <div className="row">
      {cards.map((item, index) => (
        <div key={index} className="col" id={index}>
          <div className="card">
            <img id="image" src={item.cardsReverse.sakuraReverse} alt=""/>
            <button className="btn btn-dark" onClick={() => {
              document.getElementById('image').src = item.sakuraCard
            }}>
              {item.kanji}
              {/* {this.state.showText && <p>Se muestra esto</p>} */}
            </button>
          </div>
        </div>
      ))}
    </div>
    
  );
  
};


export default Cards;
