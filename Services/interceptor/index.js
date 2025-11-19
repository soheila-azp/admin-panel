import axios from "axios";
import { toast } from "react-toastify";
import {getItem,removeItem} from "../common/storage.services"

const baseURL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  if (response.data.success != undefined && !response.data.success) {
    toast(response.data.message);
  } else if (response.data.success != undefined && response.data.success) {
    // toast(response.data.message);
  }
  return response.data;
};

const onError = (err) => {
  toast.error(err.response.data.ErrorMessage[0]);
  if (err.response.status == 422) {
    err.response.data.ErrorMessage.map((err) => {
      // toast.error(err);
    });
  }
  if (err.response.status === 401) {
    removeItem("token");
    toast.error("اجازه دسترسی شما منقضی شد، لطفا دوباره وارد شوید!");
    window.location.href = "http://localhost:3005/login";
  }
  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.ErrorMessage[0]);
    alert(
      "Client error: " +
        !(err.response.ErrorMessage && err.response.ErrorMessage.length > 0) &&
        err.response.status
    );
  }

  return Promise.reject(err);
};

http.interceptors.response.use(onSuccess, onError);

http.interceptors.request.use((opt) => {
  const token = getItem("token");
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default http;
