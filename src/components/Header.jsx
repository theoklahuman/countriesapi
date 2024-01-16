import "./Header.css"
import moonIcon from "../assets/moon-regular.svg"

function Header() {
    return <header className="Header">
        <p>Where in the world?</p>
        <img src={moonIcon} alt="moon icon" />
        <p>Dark Mode</p>
    </header>
}

export default Header;