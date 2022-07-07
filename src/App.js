import React, { useState } from "react";
function App() {
  const [name, setName] = useState("Kübra");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["semra", "mehtap"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34756 });
  return (
    <div>
      <h1>İSİM: {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("NUR")}>İsim Değiştir</button>
      <button onClick={() => setAge("22")}>Yaş Değiştir</button>
      <hr />
      <br></br>
      <h2>Arkadaş</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "büşra"])}>
        sonuna yeni kişi ekle
      </button>{" "}
      {/* verileri korumak için ...friends kullanırız */}
      <button onClick={() => setFriends(["büşra", ...friends])}>
        {" "}
        başına yeni kişi ekle
      </button>
      <hr />
      <br></br>
      <h2>ADRES</h2>
      <div>
        {address.title}  {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({...address, title: "Ankara", zip: 4444 })}>
        Adres Değiştir
      </button>
    </div>
  );
}

export default App;
