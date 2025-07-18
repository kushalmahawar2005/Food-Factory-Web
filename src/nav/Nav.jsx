import "./Nav.css";
import Search from "../search/Search";
function Nav() {
  return (
    <div className="Nav">
        <h1>Food Factory</h1>
            <p><Search /></p>
        <nav id = "item">
          <ul>
       <li><a href="">Home</a></li>
        <li><a href="">About </a></li>
        <li><a href = "">Braverage </a></li>
        <li><a href="">Contact</a></li>
        </ul>
        </nav>
      
    </div>
  );
}

export default Nav;
