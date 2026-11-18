import {Greeting} from './Greeting'
import { UserWrap } from "./UserWrap";
import './App.css'
import { UserDetails } from './Userdetails';
import {ProductList} from  './ProductList'
import { Alert } from './Alert';
import { Button } from './Button';
import { CustomButton } from './CustomButton';
import { ContactUs } from './ContactUs';
import { Subscribe } from './Subscribe';
import { MenuList } from './MenuList';

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
      {/* <UserWrap  id={22} age={42}   name={"Barik"}
    address={"Purnea"}
    mobile={9898989898} /> */}

    {/* <UserDetails name="Brouce" isOnline={true} isPremium={true}/>
    <UserDetails name="Mark" isOnline={false} isNewUser={true} isPremium={true}/> */}
    {/* <ProductList /> */}
      {/* <Alert type='success'>
        Data Successful updated!
      </Alert>
      <Alert type='error'>
        Somthing Wrong in your code!
      </Alert>
      <Alert >
        Somthing Wrong in your code!
      </Alert> */}
      {/* <Button>My Button</Button> */}
      {/* <CustomButton name='Submit'></CustomButton>
      <CustomButton name='Cancel'></CustomButton> */}
      {/* <ContactUs/>
      <Subscribe /> */}
      <MenuList />

    </>
  )
}

export default App

