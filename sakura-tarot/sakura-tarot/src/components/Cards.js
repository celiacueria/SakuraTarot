import React from 'react'

const Cards = ({cards = []}) => {
  return (
    <div className='row'>
        
                {cards.map((item, index) => (
                    <div key={index} className='col'>
                        <div className="card" style={{width:"200px",marginTop: "25px"}}>
                            <img style={{height:"250px" }} src={item.cardsReverse.sakuraReverse} alt=""/>
                            <p style={{textAlign: "center"}}>{item.kanji}</p>
                        </div>
                    </div>
            
                ) )}
    </div>
  )
}

export default Cards