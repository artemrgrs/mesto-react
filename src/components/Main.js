import React from 'react';
import api from "../utils/Api.js";
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setuserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');
    const [userAvatar, setuserAvatar] = React.useState('');
    const [cards, setcards] = React.useState([]);

    React.useEffect(() => {
        api.getAllNeededData().then(res => {
        const [profileData, cardsData] = res;
          setuserAvatar(profileData.avatar);
          setuserName(profileData.name);
          setuserDescription(profileData.about);
          setcards(cardsData);
          })
          .catch((err) => console.log(err));
        },[]);

  return (
    <main>
        <section className="profile">
            <div className="profile__edit-cover" onClick={onEditAvatar}></div>
                <img className="profile__avatar" src={`${userAvatar}`} alt="аватар"/>
            <div className="profile__container">
                <div className="profile__user-data">
                    <div className="profile__profile-info">
                        <h1 className="profile__name">{`${userName}`}</h1>
                        <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
                    </div>
                    <p className="profile__occupation">{`${userDescription}`}</p>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__add-button"></button>
            </div>
        </section>

        <section className="elements">
            {cards.map(card => (
                <Card card={card} key={card._id} onCardClick={onCardClick}/>
            ))
            }
        </section>
    </main>
  );
}

export default Main;
