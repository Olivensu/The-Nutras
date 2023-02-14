import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import AllCourses from './component/AllCourses/AllCourses';
import HomeInstructor from './component/Home/Home-Instructor/HomeInstructor';
import Courses from './component/Courses/Courses';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import SignIn from './component/Login/SignIn';
import SignUp from './component/Login/SignUp';
import MobileApp from './component/MobileApp/MobileApp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
        <>
          <Home></Home>
          <AllCourses></AllCourses>
          <HomeInstructor></HomeInstructor>
          <Courses></Courses>
          <MobileApp></MobileApp>
        </>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
