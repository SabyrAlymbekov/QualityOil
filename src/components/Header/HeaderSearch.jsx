import SearchIcon from '@assets/search_icon.svg'
import './HeaderSearch.sass'

export default function HeaderSearch() {
    return <div className="HeaderSearch">
        <input type="text" className="HeaderSearch__input" id="HeaderSearchInput" placeholder="Моторное масло..."/>
        <label htmlFor="HeaderSearchInput" className="HeaderSearch__label"><img src={SearchIcon} alt="search icon" className="HeaderSearch__image"/></label>
    </div>
}