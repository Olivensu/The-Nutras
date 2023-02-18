import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import AllCourses from './component/AllCourses/AllCourses';
import HomeInstructor from './component/Home/Home-Instructor/HomeInstructor';
import Courses from './component/Courses/Courses';
import TotalCourses from './component/Courses/TotalCourses';
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/Login/SignIn';
import SignUp from './component/Login/SignUp';
import MobileApp from './component/MobileApp/MobileApp';
import CourseDetails from './component/CourseDetails/CourseDetails';
import NotFound from './component/NotFound/NotFound';
import CheckOut from './component/CheckOut/CheckOut';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Partners from './component/Partners/Partners';
import Blogs from './component/Blogs/Blogs';
import Blog1 from './component/Blogs/Blog1';
import Blog2 from './component/Blogs/Blog2';
import Blog3 from './component/Blogs/Blog3';
import About from './component/About/About';

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
          <Partners></Partners>
          <Blogs>
            
          </Blogs>
          <MobileApp></MobileApp>
        </>}></Route>
        <Route path='/totalCourses' element={<TotalCourses></TotalCourses>}></Route>
        <Route path='/Course-Details/:serviceId' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='blog-1' element={<Blog1></Blog1>}></Route>
        <Route path='blog-2' element={<Blog2></Blog2>}></Route>
        <Route path='blog-3' element={<Blog3></Blog3>}></Route>
        <Route path='/checkout' element={<PrivateRoute><CheckOut></CheckOut></PrivateRoute>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
