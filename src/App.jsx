// import Hello from './Hello'
// import Button from './Button';
import Toggletext from "./Toggletext";
import Object from "./object";
import Counter from "./Counter";

function App() {
  // const siblings = ['Mukesh','Abhishek', 'Ankit', 'Anshu', 'Ritik'];

  // function msg() {
  //   alert("Hello form Click me")
  // }
  // function bye() {
  //   alert("Hello form Bye Click me")
  // }
  return (
    <>
    <Object />
    <Toggletext />
    <Counter />
      {/* <Hello name="Abhishek" age={33} city='Talgram' siblings={siblings}/>
      <Button label='Click Me' handleClick={msg}/>
      <Button label='Click Me To Bye' handleClick={bye}/> */}
      {/* <button onClick={msg}>CLick me,</button> */}
    </>
  )
}

export default App
