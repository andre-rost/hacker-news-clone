import hackernews from "../images/hackernews.png";

function Navbar() {
  return (
    <header>
      <div className="App-header">
        <div className="logoBlock">
          <img className="logo" src={hackernews} alt="logo" />
          <h2 className="Hacker-news">Hacker News</h2>
        </div>
        <ul className="Navbar">
          {/* <img className="logo" src={hackernews} alt="logo" />
          <li className="Hacker-news">Hacker News</li> */}
          <li>News</li>
          <li>Past</li>
          <li>Commnents</li>
          <li>Ask</li>
          <li>Show</li>
          <li>Jobs</li>
          <li>Submit</li>
        </ul>
      </div>

      <p>Login</p>
    </header>
  );
}

export default Navbar;
