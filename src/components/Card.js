import React from 'react';

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
      }  

    return (
        <div className="element">
              <button type="button" className="element__delete-button"></button>
                  <img className="element__image" src={props.card.link} alt={`${props.card.name}`} onClick={handleCardClick}/>
              <div className="element__info">
                  <h2 className="element__heading">{`${props.card.name}`}</h2>
                  <div className="element__like-container">
                      <button type="button" className="element__button"></button>
                      <p className="element__like-count">{`${props.card.likes.length}`}</p>
                  </div>
              </div>
          </div>
    )
}

export default Card;
  