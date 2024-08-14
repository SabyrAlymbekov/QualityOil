

import {NavLink} from "react-router-dom";
import Path from "@components/path/path.jsx";
import '@/pages/contacts/contact.sass'
import {useState} from "react";

// 25min

export default function Contact() {
    const [name, setName] = useState("");
    const [numbers, setNumbers] = useState("");
    const [message, setMessage] = useState("");

    const [isNCorrect, setIsNCorrect] = useState(2);
    const [isPhoneCorrect, setIsPhoneCorrect] = useState(2);
    const [isMessageCorrect, setIsMessageCorrect] = useState(2);

    const handleSubmit = (e) => {
        let can = true;
        if (name.split(' ').join('') === "") {
            can = false;
            setIsNCorrect(1);
        } else {
            can = can && true;
            setIsNCorrect(0);
        }
        if (numbers.split(' ').join('') === "") {
            can = false;
            setIsPhoneCorrect(1);
        } else {
            can = can && true;
            setIsPhoneCorrect(0);
        }
        if (message.split(' ').join('') === "") {
            can = false;
            setIsMessageCorrect(1);
        } else {
            can = can && true;
            setIsMessageCorrect(0);
        }

        if (can) {
            e.preventDefault();
            // send form to server
            location.reload();
        }
    }

    return <div className="contact  container">
        <Path path={[<NavLink to='/'>Главная</NavLink>, <NavLink to='/contact'>Контакты</NavLink>]}></Path>
        <div className="heading">
            Связаться с нами
        </div>
        <div className="contact__form">
            <div className="contact__info">
                <label htmlFor="contact__input-name" className="contact__label">Полное имя</label>
                <input type="text"
                       className={"contact__input" + (isNCorrect === 1 ? " incorrect" : "") + (isNCorrect === 0 ? " correct" : "")}
                       onChange={e => setName(e.target.value)}
                       value={name} id="contact__input-name"/>
                {isNCorrect === 1 && <p className="contact__incorrect">Необходимо заполнить поле</p>}
            </div>
            <div className="contact__info">
                <label htmlFor="contact__input-name" className="contact__label">Телефон</label>
                <input type="text"
                       className={"contact__input" + (isPhoneCorrect === 1 ? " incorrect" : "") + (isPhoneCorrect === 0 ? " correct" : "")}
                       onChange={e => setNumbers(e.target.value)}
                       value={numbers} id="contact__input-name"/>
                {isPhoneCorrect === 1 && <p className="contact__incorrect">Необходимо заполнить поле</p>}
            </div>
            <div className="contact__info">
                <label htmlFor="contact__input-name" className="contact__label">Сообщение</label>
                <textarea
                    className={"contact__input" + (isMessageCorrect === 1 ? " incorrect" : "") + (isMessageCorrect === 0 ? " correct" : "")}
                    onChange={e => setMessage(e.target.value)}
                    value={message} id="contact__input-name"/>
                {isMessageCorrect === 1 && <p className="contact__incorrect">Необходимо заполнить поле</p>}
            </div>
        </div>
        <div className="contact__footer">
            <button className="contact__submit" onClick={handleSubmit}>Отправить</button>
        </div>
        <iframe frameBorder="0" className='contact__address'
                src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1173.8097819649151!2d74.61653623545499!3d42.88524854795865!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb794a517e35f%3A0x5c4ebc6cb0de789b!2zMzcxINC_0YDQvtGB0L8uINCW0LjQsdC10Log0JbQvtC70YMsINCR0LjRiNC60LXQuiwg0JrQuNGA0LPQuNC30LjRjw!5e1!3m2!1sru!2sru!4v1505230435041"></iframe>
    </div>
}