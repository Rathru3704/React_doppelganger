import React from 'react';
import Card from './Card';

/*
Dumb(Presentational) Component:
    present something to the DOM
    often a function with a render() method
*/

const CardList = ({doppelgangers}) => {
    return(
        <div className='mh5'>
            {
              doppelgangers.map((doppelganger, i) => {
                return(
                    <Card key={doppelgangers[i].id} id={doppelgangers[i].id} name={doppelgangers[i].name} email={doppelgangers[i].email} phone={doppelgangers[i].phone} address={doppelgangers[i].address.city} />
                    // When do a loop you need a key prop to remember every element
                    // Keys help React identify which items have changed, are added, or are removed. 
                    // Keys should be given to the elements inside the array to give the elements a stable identity
                    // https://reactjs.org/docs/lists-and-keys.html#keys
                );
              })
            }
        </div>
    );
}
// old version is like this below:
/*
import React, {Component} from 'react';
class CardList extends React.Component{
  render(){
    return(
      ...
    )
  }
}
*/

export default CardList;