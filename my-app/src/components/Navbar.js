import hackernews from "../images/hackernews.png";

function Navbar() {
  return (
    <header>
      <div className="App-header">
        <div className="logoBlock">
          <img className="logo" src={hackernews} alt="logo" />
          <a className="Hacker-news">Hacker News</a>
        </div>
        <div className="navLinsBlock">
          <ul className="Navbar">
            {/* <img className="logo" src={hackernews} alt="logo" />
          <li className="Hacker-news">Hacker News</li> */}
            <li>
              <a>news</a>
            </li>
            <li> | </li>
            <li>
              <a>past </a>
            </li>
            <li> | </li>
            <li>
              <a>commnents </a>
            </li>
            <li> | </li>
            <li>
              <a>ask </a>
            </li>
            <li> | </li>
            <li>
              <a>show </a>
            </li>
            <li> | </li>
            <li>
              <a>jobs </a>
            </li>
            <li> | </li>
            <li>
              <a>submit</a>{" "}
            </li>
          </ul>
          <p className="loginLink">login</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
