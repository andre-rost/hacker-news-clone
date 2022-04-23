function News() {
  return (
    <li className="News-post">
      <div className="newsContainer">
        <div className="votearrow upvote">
          <i class="fa-solid fa-sort-up"></i>
        </div>
        <div className="newsBlock">
          <a href="#">
            <h2>
              {" "}
              News about news
              <a href="#">
                <span className="datarow">
                  (filtering news from the same source)
                </span>
              </a>
            </h2>
          </a>

          <br />
          <p className="datarow">
            100 points by
            <a href="#">
              <span className="datarow"> userid </span>
            </a>
            <a href="#">
              <span className="datarow">posted </span>
            </a>{" "}
            |
            <a href="#">
              <span className="datarow"> hide </span>
            </a>{" "}
            |
            <a href="#">
              <span className="datarow">comments</span>
            </a>
          </p>
        </div>
      </div>
    </li>
  );
}

export default News;
