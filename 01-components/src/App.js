import './App.css';

import Header from './components/Header';

function App(){
  return(
    <div>
      <Header />
      <p className="xyz">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, placeat.</p>

      <label htmlFor="myinput">
        Name
        <input id="myinput" />
      </label>

      


    </div>
  );
}

export default App;
