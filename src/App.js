import React,{useState} from 'react';
import './Custom.css';
import Card from './Card';
const { faker } = require('@faker-js/faker');

function App() {
  const [name, setName] = useState('Alan Smith');
  const [showCard, setShowCard] = useState(true);

  const buttonsMarkup = (
    <div>
      <button className='button button2'>YES</button>
      <button className='button button3'>NO</button>
    </div>
  );

  const changeNameHandler = name => setName(name);

  const changeInputHandler = event => setName(event.target.value);

  const toggleShowCard = () => setShowCard(!showCard);

  return (
    <div className='App'>
      <button className='button' onClick={toggleShowCard}>Toggle show/hide</button>
      {showCard &&
        <Card
          avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg"
          name={name}
          title="Back End Developer"
          onChangeName={() => changeNameHandler('Michael Chan')}
          onChangeInput={changeInputHandler}
        >{buttonsMarkup}
        </Card>
      }
    </div>
  );
}

export default App;
