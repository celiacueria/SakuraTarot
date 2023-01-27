import React from "react";


const Cards = ({ cards = [] }) => {
  
  
  // const pulsar = () => {
  //   this.setState({showText: true})
  // };

  cards.sort(() => Math.random() - 0.5);

  return (
   
    
 
     
    <div className="row">
      {cards.map((item, index) => (
        <div key={index} className="col" >
          <div className="card" >
            <img
            id={index}
              style={{ height: "250px" }}
              src={item.cardsReverse.sakuraReverse}
              alt=""
            />
            <button
              style={{ textAlign: "center" }}
              className="btn btn-dark"
              onClick={ () => {
               
                  document.getElementById(index).src = item.sakuraCard
                 
                  document.querySelector("#result").innerHTML += "</br>   " +item.meaning 

                  
               
                  
                
              
                
              }
            }
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
