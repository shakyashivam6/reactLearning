import {useState} from 'react'

export default function Forminput() {
    const [name, setName] = useState("");
    return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <h1>Hello : {name || "Guest"}</h1>
    </div>
  )
}

