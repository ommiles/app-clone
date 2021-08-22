import { useState } from 'react';
import { default as Card }from 'react-tinder-card';

export const CardList = () => {
  const [people, setPeople] = useState([
    {
      name: 'Dr. Shirley Jackson',
      url: 'https://aaregistry.org/wp-content/uploads/2009/09/dr-shirley-ann-jackson-279x300.jpg',
    },
    {
      name: 'Roy L. Clay',
      url: 'https://www.blackentrepreneurprofile.com/fileadmin/user_upload/royclay.jpg',
    },
    {
      name: 'Lonnie G. Johnson',
      url: 'https://invention.si.edu/sites/default/files/inventors-johnson-lonnie-lonnie-with-super-soaker-2-small-teaser-edit.jpg',
    },
  ]);

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
            onSwipe={direction => swiped(direction, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className='card' style={{ backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
