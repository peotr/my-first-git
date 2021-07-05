import { Link} from 'react-router-dom';
import './stayls/Header.css';
 
function Header(){
    return(
        <header className="header">
            <div className="container">
                <nav>
                    <h1>Logo</h1>
                    <div className="nav_links">
                        <ul className="nav_links">
                            <li className="link">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="link">
                                <Link to='/'>Sing-up</Link>
                            </li>
                            <li className="link">
                                <Link to='/'> Sing in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;