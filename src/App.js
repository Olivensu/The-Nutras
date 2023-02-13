import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import AllCourses from './component/AllCourses/AllCourses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AllCourses></AllCourses>
      <Footer></Footer>
    </div>
  );
}

export default App;
