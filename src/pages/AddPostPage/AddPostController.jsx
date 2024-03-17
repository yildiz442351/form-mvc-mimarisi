import { useState } from "react";
import AddPostModel from "./AddPostModel";
import AddPostView from "./AddPostView";
import axiosInstance from "../../constants";
import { useNavigate } from "react-router-dom";
const AddPostController = () => {
  const formModel = new AddPostModel();

  const [form, setForm] = useState(formModel.state);
  // const [input, setInput] = useState(""); yap sil setInput={setInput}   console.log(input);

  // key: hangi inputa yazıldığının bilgisi
  // value: inputun içerisindeki değer
  const onInputChange = (key, e) => {
    // console.log(key, e.target.value);
    setForm({ ...form, [key]: e.target.value });
  };
  console.log(form);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      alert("Tüm alanları doldurunuz");
    }
    axiosInstance.post("posts", form).then((response) => navigate("/"));
  };
  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;