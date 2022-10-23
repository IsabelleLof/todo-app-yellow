import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
import flower from './assets/flower.jpg';
import React, { createContext, useState } from 'react';
import Homepage from './Pages/HomePage/Homepage';
import Navbar from './Navbar';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blog/Blog';
import Create from './Pages/Create/Create';
import { Button, Container, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './ThemeContext';

//export const ThemeContext = createContext(null);

function App() {

  const [darkMode, setDarkMode] = React.useState('');

//const [theme, setTheme] = useState('light');

  return (
    //<ThemeContext.Provider>
    <div className='App'>
              <h1 className="text-warning">Dark/Light mode</h1>
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">Switch mode</span>
              </Button>
            )}
        </ThemeContext.Consumer>
        </InputGroup>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/create' element={ <Create a new Todo />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/blog' element={ <Blog />} />
        </Routes>
        </BrowserRouter>
    </div>
    //</ThemeContext.Provider>
        );
    }

    export default App;
