import axios from "axios";

// the below code what it does is it always append the initial data in our website just like google
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
