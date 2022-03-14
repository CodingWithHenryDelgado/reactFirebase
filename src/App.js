import React,{useState} from 'react';
import './Custom.css';
import Card from './Card';
import styled from 'styled-components';

const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

const Button = styled.button`
  background-color: ${props=> props.length > 2 ? '#4CAF50' : props.length<2 ? 'red' : "pink"};
  border: none;
  color: ${props => props.length<=1 ? 'black' : 'white'};
  font-weight: ${props => props.length<=1? 'bold' : 'normal'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

function App() {
  const [cards, setCards] = useState([
    {
      id:"yourmom",
      name: "Damaris Schuster",
      title: "International Operations Producer",
      avatar: 'http://images2.fanpop.com/image/photos/8600000/random-animals-animals-8675984-377-442.jpg'
    },
    {
      id:"yourgay",
      name: "Bartholome Dietrich",
      title: "Future Security Developer",
      avatar: "https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg"
    }
  ])
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cardIndex,1);
    setCards(cards_copy);
  }
  const changeNameHandler = (event,id) => {
    //Which card is selected
    const cardIndex = cards.findIndex(card=> card.id === id);
    //Make a copy of the cards
    const cards_copy = [...cards];
    //Change the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    //Set the cards with the latest version of card
    setCards(cards_copy);
  }

  const classes = ['button'];

  if(cards.length < 3) classes.push('pink');
  if(cards.length < 2) classes.push('red text');

  return (
      <div className='App'>
        <Button length={cards.length}>Toggle</Button>
        <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle show/hide</button>
        {showCard &&
          cards.map((card,index) => 
            <Card
              avatar={card.avatar}
              name={card.name}
              title={card.title}
              key={card.id}
              onDelete={() => deleteCardHandler(index)}
              onChange = {(event) => changeNameHandler(event, card.id)}
            />)
        }
      </div>
  );
}

export default App;
