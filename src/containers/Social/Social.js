import { Route } from 'react-router';
import Layout from '../../components/Layout/Layout';
import Profile from './Profile/Profile';
import './Social.css';

const Social = () => {
  return (
    <div className='social'>
    <Layout>
<Route component={Profile}/>
    </Layout>
    </div>
  );
}

export default Social;
