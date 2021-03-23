import "./News.css";

const News = ({ img, title, msg }) => {
  return (
    <div className='news_wrapper'>
      <img src={img} alt={title}/>
      <div className='news_wrapper_title'>
        <h6>{title}</h6>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default News;
