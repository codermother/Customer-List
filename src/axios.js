import axios from "axios";

//created a new mocked data

const instance = axios.create({
  baseURL: " https://retoolapi.dev/DQykI2/",
});

export default instance;
