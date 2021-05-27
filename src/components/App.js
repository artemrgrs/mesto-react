import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
    const [isAddPlacePopupOpen, setEditPlacePopup] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setEditAvatarPopup(true);
    }
    
    function handleEditProfileClick() {
        setEditProfilePopup(true);
    } 

    function handleAddPlaceClick() {
        setEditPlacePopup(true);
    } 

    function handleCardClick(props) {
        setSelectedCard(props);
    } 

    function closeAllPopups () {
        setEditAvatarPopup(false);
        setEditProfilePopup(false);
        setEditPlacePopup(false);
        setSelectedCard(null);
    }
    
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm title="Обновить аватар" name="avatar-popup" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <fieldset className="form__user-info">
                <input id="avatar-link" type="url" className="form__field form__field_data_link"
                    name="link" value="" placeholder="Ссылка на картинку"  required/>
                <span id="avatar-link-error" className="form__error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>
        <PopupWithForm title="Редактировать профиль" name="profile-popup" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <fieldset className="form__user-info">
                <input id="name" type="text" className="form__field form__field_data_name"
                    name="name" value="" placeholder="Имя" required minLength="2" maxLength="40"/>
                <span id="name-error" className="form__error"></span>
                <input id="occupation" type="text" className="form__field form__field_data_occupation"
                    name="about" value="" placeholder="Занятие" required minLength="2" maxLength="200"/>
                <span id="occupation-error" className="form__error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="card-popup" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <fieldset className="form__user-info">
                <input id="title" type="text" className="form__field form__field_data_title"
                    name="name" value="" placeholder="Название" required minLength="2" maxLength="40"/>
                <span id="title-error" className="form__error">Вы пропустили это поле.</span>
                <input id="link" type="url" className="form__field form__field_data_link"
                    name="link" value="" placeholder="Ссылка на картинку"  required/>
                <span id="link-error" className="form__error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>
        {/* <PopupWithForm title="Вы уверены?" name="popup-delete" button="да" /> */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </div>    
    </div>
  );
}

export default App;

