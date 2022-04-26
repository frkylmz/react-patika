import './App.css';

import Header from './components/Header';

const name = "Faruk";
const surname = "Yılmaz";
const isLoggedIn = true;

function App(){
  return(
    <>

    <h1>{ isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş yapmadınız." }</h1>

    </>
  );
}

export default App;
