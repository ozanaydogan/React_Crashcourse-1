import React, { useEffect,useState } from 'react';
const Card = (props) => {

  const [age, setAge] = useState(0)
  const [name, setName] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const person = { age, name}
  console.log("kod calisti")

  useEffect(() =>{
    console.log(person)
  },[person])

  return (
    <div style={{background:darkMode ? "#333" : "#FFF"}}>
      Age:{" "}
      <input value={age} type="number" onChange={e => setAge(e.target.value)}/>
      <br />
      Name:{" "} <input value={name} type="text" onChange={e => setName(e.target.value)}/>
      <br />
      DarkMode:{" "}
      <input value={darkMode} type="checkbox" onChange={e => setDarkMode(e.target.checked)}/>
      
    </div>
  )
};

export default Card