import axios from "axios";

const axiosProfile = axios.create({
    baseURL: 'https://js-react-node-default-rtdb.firebaseio.com/social/profile'
})
export default axiosProfile;