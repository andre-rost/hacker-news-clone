function News({ newsPost, index }) {
  console.log(newsPost);
  return (
    // <li className="News-post">

    <div className="newsContainer">
      <div className="index">{index + 1} </div>
      <div className="votearrow upvote">
        <i class="fa-solid fa-sort-up"></i>
      </div>
      <div className="newsBlock">
        <a href="#">
          <p>
            {" "}
            {newsPost.title}
            <a href="#">
              <span className="datarow  newsSource">({newsPost.url})</span>
            </a>
          </p>
        </a>

        <br />
        <p className="datarow">
          {newsPost.points} points by
          <a href="#">
            <span className="datarow"> {newsPost.author.value} </span>
          </a>
          <a href="#">
            <span className="datarow">{newsPost.created_at} </span>
          </a>{" "}
          |
          <a href="#">
            <span className="datarow"> hide </span>
          </a>{" "}
          |
          <a href="#">
            <span className="datarow">{newsPost.num_comments} comments</span>
          </a>
        </p>
      </div>
    </div>
    // </li>
  );
}

export default News;
