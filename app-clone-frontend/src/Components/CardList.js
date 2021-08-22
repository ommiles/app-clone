import { useState, useEffect } from 'react';
import axios from '../axios';
import { default as Card }from 'react-tinder-card';

export const CardList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/app-clone/cards')
      setPeople(req.data)
    }
    fetchData()
  }, []);

  console.log(people)

  const swiped = (direction, name) => {
    console.log(`Removing: ${name}!`);
  };

  const outOfFrame = name => {
    console.log(`${name} left the screen.`);
  };

  return (
    <div>
      <div className='cards__cardContainer'>
        {people.map((person, idx) => (
          <Card
            className='swipe'
            key={idx}
            preventSwipe={['up', 'down']}
            onSwipe={direction => swiped(direction, person.url)}
            onCardLeftScreen={() => outOfFrame(person.url)}
          >
            <div className='card' style={{ backgroundImage: `url(${person.imgUrl})` }}>
              <h3>{person.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
