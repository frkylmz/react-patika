import {useState} from "react";

function App() {
  const [name, setName] = useState("Faruk");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: "İzmir", zip: 35080 });

  console.log(age, name);

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge("25")}>Change age</button>

      <hr />
      <br /><br />
  
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <br />

      <button onClick={() => setFriends([...friends, "Ayşe"])}>add new friend</button>
                  
      <hr />
      <br /><br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <br />
      
      <button onClick={() => setAddress({ ...address, title: "Ankara", zip: 44444 })}>
        change the address
      </button>


    </div>
  );
}

export default App;
