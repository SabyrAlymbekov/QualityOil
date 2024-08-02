import '@components/OnlineOrder/OnlineOrderModal.sass'
import {useEffect, useRef, useState} from "react";

export default function OnlineOrderModal({ onClose }) {
    const clref = useRef(null);
    const [name, setName] = useState("");
    const [numbers, setNumbers] = useState("");
    const [oil, setOil] = useState("");
    const [isNCorrect, setIsNCorrect] = useState(2);
    const [isPhoneCorrect, setIsPhoneCorrect] = useState(2);
    const [isOilCorrect, setIsOilCorrect] = useState(2);

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
            console.log(numbers)
        } else {
            can = can && true;
            setIsPhoneCorrect(0);
        }
        if (oil === "") {
            can = false;
            setIsOilCorrect(1);
        } else {
            can = can && true;
            setIsOilCorrect(0);
        }
        if (can) {
            e.preventDefault();
            // send form to server
            onClose()
        }
    }

    useEffect(() => {
        const eventFunc = (ev) => {
            if (ev.target === clref.current) {
                clref.current.removeEventListener("mousedown", eventFunc)
                onClose();
            }
        }
        clref.current.addEventListener("mousedown", eventFunc)
        return () => {
            if (clref.current != null)
                clref.current.removeEventListener("mousedown", eventFunc)
        }
    }, []);
    
    return <div className="OnlineOrderModal" ref={clref}>
        <div className="OnlineOrderModal__wrapper">
            <div className="OnlineOrderModal__header">
                <h1 className="OnlineOrderModal__heading">Оформить заказ</h1>
                <button className="OnlineOrderModal__close" onClick={onClose}>
                    ×
                </button>
            </div>
            <div className="OnlineOrderModal__main">
                <div className="OnlineOrderModal__info">
                    <label htmlFor="OnlineOrderModal__input-name" className="OnlineOrderModal__label">Полное имя</label>
                    <input type="text" className={"OnlineOrderModal__input" + (isNCorrect === 1 ? " incorrect" : "") + (isNCorrect === 0 ? " correct" : "")} onChange={e => setName(e.target.value)}
                           value={name} id="OnlineOrderModal__input-name" />
                    {isNCorrect === 1 && <p className="OnlineOrderModal__incorrect">Необходимо заполнить поле</p>}
                </div>
                <div className="OnlineOrderModal__info">
                    <label htmlFor="OnlineOrderModal__input-name" className="OnlineOrderModal__label">Телефон</label>
                    <input type="text" className={"OnlineOrderModal__input" + (isPhoneCorrect === 1 ? " incorrect" : "") + (isPhoneCorrect === 0 ? " correct" : "")} onChange={e => setNumbers(e.target.value)}
                           value={numbers} id="OnlineOrderModal__input-name" />
                    {isPhoneCorrect === 1 && <p className="OnlineOrderModal__incorrect">Необходимо заполнить поле</p>}
                </div>
                <div className="OnlineOrderModal__info">
                    <label htmlFor="OnlineOrderModal__select" className="OnlineOrderModal__label">Масло</label>
                    <select id="OnlineOrderModal__select" className={"OnlineOrderModal__select" + (isOilCorrect === 1 ? " incorrect" : "") + (isOilCorrect === 0 ? " correct" : "")} onChange={e => setOil(e.target.value)} value={oil}>
                        <option value="">Выберите масло</option>
                        <option value="Elf">Elf</option>
                        <option value="Gazpromneft">Gazpromneft</option>
                        <option value="Лукойл">Лукойл</option>
                        <option value="Visco">Visco</option>
                        <option value="Castrol">Castrol</option>
                        <option value="Chempioil">Chempioil</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Hanata">Hanata</option>
                        <option value="Hi-Gear">Hanata</option>
                        <option value="Idemitsu">Idemitsu</option>
                        <option value="Mannol">Mannol</option>
                        <option value="Pemco">Pemco</option>
                        <option value="Petronas">Petronas</option>
                        <option value="Rolf">Rolf</option>
                        <option value="Totachi">Totachi</option>
                        <option value="Total">Total</option>
                        <option value="Takayama">Takayama</option>
                        <option value="Zic">Zic</option>
                    </select>
                    {isOilCorrect === 1 && <p className="OnlineOrderModal__incorrect">Необходимо заполнить поле</p>}
                </div>
            </div>
            <div className="OnlineOrderModal__footer">
                <button className="OnlineOrderModal__submit" onClick={handleSubmit}>Отправить</button>
            </div>
        </div>
    </div>
}