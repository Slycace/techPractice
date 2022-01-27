import React, {useState, useContext} from 'react';
import { Heading, VStack, IconButton } from '@chakra-ui/react';
import GroceryForm from './Components/GroceryForm/GroceryForm';
import {FaSun, FaMoon} from 'react-icons/fa'


  interface ListItem {
    id: number;
    groceryItem: string;
    ammount: number;
}

function App() {
  const[groceries, setGroceries]:[object[], any] = useState([{}]);
  return (
    <VStack p={4}>
      <IconButton
      alignSelf={"flex-end"}
      size='lg' aria-label="darkmode"
      icon={<FaSun/>}
      isRound={true}/>
      <Heading>Todo Application</Heading>
      <GroceryForm/>
      test
    </VStack>


  );
}

export default App;
