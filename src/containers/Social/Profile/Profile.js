import { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import axiosProfile from "../../../axios/axiosProfile";
import News from "./News/News";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosProfile.get(".json");
        const arr = Object.keys(response.data).map((id) => {
          const newData = {
            id: id,
            profile: response.data[id].profile,
            img: response.data[id].img,
            msg: response.data[id].msg,
          };
          return newData;
        });
        setProfile(arr);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [profile]);

  const deletePost = (id) => {
    const fetchData = async () => {
        try {         
          await axiosProfile.delete(id + ".json");
        } catch (e) {
          console.error(e);
        }
      };
      fetchData();
  };

  const postMsg = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {        
        if(inputValue !== undefined || inputValue.news !== ' ') {
          const data = {
            profile: "John Doe",
            img: "https://bota21.github.io/images/img/avatar9.png",
            msg: inputValue.news,
          };
          await axiosProfile.post(".json", data);
          setInputValue({news: ''});
        } else return        
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    setInputValue("");
  };

  return (
    <div className='profile'>
      <div className='profile_wrapper'>
        <img
          src='https://bota21.github.io/images/img/avatar9.png'
          alt='avatar'
          className='avatar'
        />
        <div className='main_wrapper'>
          <h3>
            Name: <span>John Doe</span>
          </h3>
          <h3>
            Age: <span>28</span>
          </h3>
          <h3>
            Country: <span>Canada</span>
          </h3>
        </div>
      </div>
      <div>
        <h2>Preferences</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='profile_img_wrapper'>
        <img src='https://bota21.github.io/images/img/avatar9.png' alt='' className='profile_img'/>
        <img src='https://bota21.github.io/images/img/avatar9.png' alt='' className='profile_img' />
        <img src='https://bota21.github.io/images/img/avatar9.png' alt='' className='profile_img' />
        <img src='https://bota21.github.io/images/img/avatar9.png' alt='' className='profile_img' />
        <img src='https://bota21.github.io/images/img/avatar9.png' alt='' className='profile_img' />
      </div>
      <Form onSubmit={postMsg}>
        <div className='form'>
          <Row className='input'>
            <Form.Control
              placeholder='Add news'
              onChange={changeValue}
              name='news'
              value={inputValue.news}
            />
            <Button variant='success' type='submit'>
              Submit
            </Button>
          </Row>
        </div>
      </Form>
     <News
     news={profile}
     remove={deletePost}
     />
    </div>
  );
};

export default Profile;
