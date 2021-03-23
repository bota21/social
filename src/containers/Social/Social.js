import { Route } from "react-router";
import Layout from "../../components/Layout/Layout";
import Profile from "./Profile/Profile";
import "./Social.css";
import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import Community from './Community/Community';

const Social = () => {
  return (
    <div className='social'>
      <Layout>
        <Route path='/profile' component={Profile} />
        <Route path='/messages' component={Messages} />
        <Route path='/friends' component={Friends} />
        <Route path='/community' component={Community} />
      </Layout>
    </div>
  );
};

export default Social;
