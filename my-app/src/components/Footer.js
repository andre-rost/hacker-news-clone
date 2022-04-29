function Footer() {
  return (
    <footer className="App-footer">
      <p className="footerNotice">Applications are open for YC Summer 2022</p>
      <ul className="Footer-list">
        <li className="Footer-links">
          <a href="#">Guidelines</a>
          <li>|</li>
          <a href="#">FAQ</a>
          <li>|</li>
          <a href="#">Lists</a>
          <li>|</li>
          <a href="#">API</a>
          <li>|</li>
          <a href="#">Security</a>
          <li>|</li>
          <a href="#">Legal</a>
          <li>|</li>
          <a href="#">Apply to YC</a>
          <li>|</li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <form method="get" action="//hn.algolia.com/">
        Search:
        <input
          type="text"
          name="q"
          value=""
          size="17"
          autocorrect="off"
          spellcheck="false"
          autocapitalize="none"
          autocomplete="false"
        />
      </form>
    </footer>
  );
}

export default Footer;
