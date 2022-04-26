import './App.css';

import User from './components/User' 

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Gökalp",
  },
];

function App() {
  return (
    <>
      <User 
        // name="Faruk" 
        surname="Yılmaz" 
        isLoggedIn={true} 
        age={"23"} 
        friends={friends}
        address={{
          title: "Bornova/İzmir",
          zip: 34755
        }} 
      />
    </>
  );
}

export default App;
