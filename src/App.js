import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page404 from './pages/404';
import MainPage from './pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' Component={MainPage}/>
          <Route exact path='/404' Component={Page404}/>
          <Route path='*' element={<Navigate to='/404' replace/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
