import {Greeting} from './Greeting'
import { UserWrap } from "./UserWrap";
import './App.css'

function App() {

  return (
    <>
      <h1>React 19 New Features</h1>
      {/* <Greeting name="Barique" message="Hellow" />
      <Greeting name="Adeen" />
      <Greeting message="Welcome" />
      <Greeting />
      <Greeting name="Barique" message="Hellow" >
        <h2>This the children Page content</h2>
        <h2>This the Paragraph Page content</h2>
      </Greeting> */}
      <UserWrap  id={22} age={42}   name={"Barik"}
    address={"Purnea"}
    mobile={9898989898} />

    </>
  )
}

export default App

