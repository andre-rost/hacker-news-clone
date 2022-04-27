function News() {
  return (
    // <li className="News-post">

    <div className="newsContainer">
      <div className="index">1. </div>
      <div className="votearrow upvote">
        <i class="fa-solid fa-sort-up"></i>
      </div>
      <div className="newsBlock">
        <a href="#">
          <p>
            {" "}
            News about news
            <a href="#">
              <span className="datarow  newsSource">
                (filtering news from the same source)
              </span>
            </a>
          </p>
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
    // </li>
  );
}

export default News;
