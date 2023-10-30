import HeaderDropdown from './HeaderDropdown';
import '../assets/css/First.css';
import { Link } from 'react-router-dom';
function AppHeader(){
return(

    <header className="container">
        <div className="title-logo-bar">
            <Link to="/">
                <img
                    className="logo"
                    src={require('../assets/images/Circus Tent.png')}
                    alt="Another Bookstore Logo"
                />
            </Link>
            <Link className={"title"} to="/" >
                <h1 className="title-text">Book Fair</h1>
            </Link>
        </div>
        <div className="nav-bar">
            <div className="search-bar">
                <form action="" className="search-form">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search for books..."
                    />
                    <input
                        type="image"
                        src={require('../assets/images/search.png')}
                        className="search-button"
                        alt="submit"
                    />
                </form>
            </div>
            <Link to="/"><div className="Home">
                <button className="home_button">Home</button>
            </div></Link>
            <HeaderDropdown />
            <div className="login">
                <button className="login_button">Login</button>
            </div>
            <div className="cart">
                <button className="cart_button"></button>
            </div>
        </div>
    </header>
)
}
export default AppHeader;

