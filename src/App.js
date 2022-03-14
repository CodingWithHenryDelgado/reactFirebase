import React,{useState} from 'react';
import './Custom.css';
import Card from './Card';
const { faker } = require('@faker-js/faker');

function App() {
  const [cards, setCards] = useState([
    {
      name: "Damaris Schuster",
      title: "International Operations Producer",
      avatar: 'http://images2.fanpop.com/image/photos/8600000/random-animals-animals-8675984-377-442.jpg'
    },
    {
      name: "Bartholome Dietrich",
      title: "Future Security Developer",
      avatar: "https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg"
    }
  ])
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);

  return (
    <div className='App'>
      <button className='button' onClick={toggleShowCard}>Toggle show/hide</button>
      {showCard &&
        cards.map(card => 
          <Card
            avatar={card.avatar}
            name={card.name}
            title={card.title}
          />)
      }
    </div>
  );
}

export default App;
