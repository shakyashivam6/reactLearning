import { useState } from "react"

export default function Object() {
    const [student, setStudent] = useState({
        name : "Abhishek",
        age : 33,
        city : "Agra"
    });

    return (
      <div>
        <h1>Student Details :- </h1>
        <h3>Name : {student.name}</h3>
        <h3>City : {student.city}</h3>
        <h3>Age : {student.age}</h3>
        <button onClick={() => { setStudent({...student, city: "Talgram"}) }}>Change City</button>
      </div>
    )
}
