import hackernews from "../images/hackernews.png";

function Navbar() {
  return (
    <header className="App-header">
      <ul className="Navbar">
        <img className="logo" src={hackernews} alt="logo" />
        <li className="Hacker-news">Hacker News</li>
        <li>Login</li>
      </ul>
    </header>
  );
}

export default Navbar;
