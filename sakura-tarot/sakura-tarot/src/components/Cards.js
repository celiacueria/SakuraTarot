import React from "react";


const Cards = ({ cards = [] }) => {

  
  const pulsar = () => {
    this.setState({showText: true})
  };


  return (
    <div className="row">
      {cards.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ width: "200px", marginTop: "25px" }}>
            <img
              style={{ height: "250px" }}
              src={item.cardsReverse.sakuraReverse}
              alt=""
            />
            <button
              style={{ textAlign: "center" }}
              className="btn btn-dark"
              onClick={pulsar}
            >
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