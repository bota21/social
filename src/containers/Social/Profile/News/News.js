import { Button } from "react-bootstrap";
import "./News.css";

const News = ({ news, remove }) => {
  return (
    <>
      {news.map((item) => {
        return (
          <div className='news_wrapper' key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className='news_wrapper_title'>
              <h6>{item.title}</h6>
              <p>{item.msg}</p>
            </div>
            <Button variant='danger' size='sm' onClick={() => remove(item.id)}>
              Delete
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default News;
