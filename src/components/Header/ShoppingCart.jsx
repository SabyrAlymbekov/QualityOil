import './ShoppingCart.sass'

export default function ShoppingCart() {
    let amount = 0;
    let cost = 0.00;
    return <button className={"ShoppingCart"}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ShoppingCart__image">
            <path
                d="M6.55578 16C5.42573 16 4.51141 16.9 4.51141 18C4.51141 19.1 5.42573 20 6.55578 20C7.68583 20 8.61042 19.1 8.61042 18C8.61042 16.9 7.68583 16 6.55578 16ZM0.391846 0V2H2.44649L6.14485 9.59L4.75797 12.04C4.59359 12.32 4.50114 12.65 4.50114 13C4.50114 14.1 5.42573 15 6.55578 15H18.8836V13H6.98726C6.84343 13 6.73042 12.89 6.73042 12.75L6.76124 12.63L7.68584 11H15.3394C16.1099 11 16.7879 10.59 17.1372 9.97L20.815 3.48C20.8972 3.34 20.9383 3.17 20.9383 3C20.9383 2.45 20.476 2 19.911 2H4.71687L3.75119 0H0.391846ZM16.829 16C15.6989 16 14.7846 16.9 14.7846 18C14.7846 19.1 15.6989 20 16.829 20C17.9591 20 18.8836 19.1 18.8836 18C18.8836 16.9 17.9591 16 16.829 16Z"
                fill="black"/>
        </svg>
        <p className="ShoppingCart__info">{amount} Товаров - {cost} Сом*</p>
        <p className="ShoppingCart__amount">{amount}</p>
    </button>
}