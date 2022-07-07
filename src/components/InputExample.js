import { useState } from "react";

function InputExample() {
  const [name, setName] = useState();
  const [surname, setSurName] = useState();

  return (
    <div>
      Bir isim Giriniz <br />
      <input
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br/>
      Soyisim Giriniz
       <input
        name="surname"
        value={surname}
        onChange={(event) => setSurName(event.target.value)}
      />
      
      <br />
      {name}
    </div>
  );
}

export default InputExample;
