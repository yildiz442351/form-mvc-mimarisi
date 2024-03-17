import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.scss";
import ListPostController from "./pages/ListPostPage/ListPostController";
import AddPostController from "./pages/AddPostPage/AddPostController";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;