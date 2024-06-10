import { Link } from "react-router-dom";
import List from "../List/List";
import "./Header.css"

const Header = () => {
    const listObjects = [
        {href: "/", name: "Home"},
        {href: "/about", name: "About"},
        {href: "/?showProjects=true", name: "Projects"},
        {href: "#contact", name: "Contact"},
      ]

    return (
        <header>
        <nav>
          <div>
            <a>Emily Kaiser</a>
          </div>
          <ul>
            {listObjects.map((list, index) => (
              <li key={index}>
                <Link to={list.href}>{list.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}
export default Header;