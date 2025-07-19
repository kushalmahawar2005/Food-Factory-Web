import "./Nav.css";
import Search from "../search/Search";
function Nav() {
  return (
    <div className="Nav" id = "home">
        <h1>Food Factory</h1>
            <p><Search /></p>
        <nav id = "item">
          <ul>
       <li><a href="#home">Home</a></li>
        <li><a href="#Qr">About </a></li>
        <li><a href = "#Food">Braverage </a></li>
        <li><a href="#Footer">Contact</a></li>
        </ul>
        </nav>
      
    </div>
  );
}

export default Nav;
