import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const [value, setValue] = React.useState('');
    const avatarRef = React.useRef('');

    function handleLinkChange(e) {
        setValue(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
        setValue('')
      }

    return (
        <PopupWithForm title="Обновить аватар" name="avatar-popup" button="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <fieldset className="form__user-info">
                <input id="avatar-link" type="url" className="form__field form__field_data_link"
                    name="link" value={value} placeholder="Ссылка на картинку"  required ref={avatarRef} onChange={handleLinkChange}/>
                <span id="avatar-link-error" className="form__error">Вы пропустили это поле.</span>
            </fieldset>
        </PopupWithForm>
    );

}

export default EditAvatarPopup;