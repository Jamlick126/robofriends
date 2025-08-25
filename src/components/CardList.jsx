import React from 'react';
import Card from '../components/Card.jsx';

const CardList = ({robots}) => {
  const cardArray = robots.map((user, i) => { 
  return (
  <Card key={i} id={robots[i].id} 
  name={robots[i].name} 
  email={robots[i].email}/>
    )
  })
  return (
    //i can move the cardArray function into the div below directly
    <div>
      {cardArray}
     </div>
    );
}

export default CardList;
  