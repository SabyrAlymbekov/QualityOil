import '@components/OnlineOrder/OnlineOrderModal.sass';
import { useEffect, useRef, useState } from "react";

const FormField = ({ label, id, type = "text", value, onChange, isCorrect }) => (
    <div className="OnlineOrderModal__info">
        <label htmlFor={id} className="OnlineOrderModal__label">{label}</label>
        {type === "text" ? (
            <input
                type={type}
                className={`OnlineOrderModal__input ${isCorrect === 1 ? "incorrect" : ""} ${isCorrect === 0 ? "correct" : ""}`}
                onChange={onChange}
                value={value}
                id={id}
            />
        ) : (
            <select
                id={id}
                className={`OnlineOrderModal__select ${isCorrect === 1 ? "incorrect" : ""} ${isCorrect === 0 ? "correct" : ""}`}
                onChange={onChange}
                value={value}
            >
                <option value="">Выберите масло</option>
                <option value="Elf">Elf</option>
                <option value="Gazpromneft">Gazpromneft</option>
                <option value="Лукойл">Лукойл</option>
                <option value="Visco">Visco</option>
                <option value="Castrol">Castrol</option>
                <option value="Chempioil">Chempioil</option>
                <option value="Dragon">Dragon</option>
                <option value="Hanata">Hanata</option>
                <option value="Hi-Gear">Hi-Gear</option>
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
        )}
        {isCorrect === 1 && <p className="OnlineOrderModal__incorrect">Необходимо заполнить поле</p>}
    </div>
);

export default function OnlineOrderModal({ onClose }) {
    const clref = useRef(null);
    const [name, setName] = useState("");
    const [numbers, setNumbers] = useState("");
    const [oil, setOil] = useState("");
    const [isNCorrect, setIsNCorrect] = useState(2);
    const [isPhoneCorrect, setIsPhoneCorrect] = useState(2);
    const [isOilCorrect, setIsOilCorrect] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        let can = true;
        if (!name.trim()) {
            can = false;
            setIsNCorrect(1);
        } else {
            setIsNCorrect(0);
        }
        if (!numbers.trim()) {
            can = false;
            setIsPhoneCorrect(1);
        } else {
            setIsPhoneCorrect(0);
        }
        if (!oil) {
            can = false;
            setIsOilCorrect(1);
        } else {
            setIsOilCorrect(0);
        }
        if (can) {
            // send form to server

            onClose();
        }
    }

    useEffect(() => {
        const eventFunc = (ev) => {
            if (ev.target === clref.current) {
                onClose();
            }
        }
        const currentRef = clref.current;
        currentRef.addEventListener("mousedown", eventFunc);
        return () => {
            currentRef.removeEventListener("mousedown", eventFunc);
        }
    }, [onClose]);

    return (
        <div className="OnlineOrderModal" ref={clref}>
            <div className="OnlineOrderModal__wrapper">
                <div className="OnlineOrderModal__header">
                    <h1 className="OnlineOrderModal__heading">Оформить заказ</h1>
                    <button className="OnlineOrderModal__close" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="OnlineOrderModal__main">
                    <FormField
                        label="Полное имя"
                        id="OnlineOrderModal__input-name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        isCorrect={isNCorrect}
                    />
                    <FormField
                        label="Телефон"
                        id="OnlineOrderModal__input-phone"
                        value={numbers}
                        onChange={e => setNumbers(e.target.value)}
                        isCorrect={isPhoneCorrect}
                    />
                    <FormField
                        label="Масло"
                        id="OnlineOrderModal__select"
                        type="select"
                        value={oil}
                        onChange={e => setOil(e.target.value)}
                        isCorrect={isOilCorrect}
                    />
                </div>
                <div className="OnlineOrderModal__footer">
                    <button className="OnlineOrderModal__submit" onClick={handleSubmit}>Отправить</button>
                </div>
            </div>
        </div>
    );
}
