import "./Header.css"
import moonIcon from "../assets/moon-solid.svg"

function Header() {
    return <header className="header">
        <p className="headerTitle">Where in the world?</p>
        <img src={moonIcon} alt="moon icon" />
        <p className="currentMode">Dark Mode</p>

    </header>
}

export default Header;