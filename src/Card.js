import React from 'react';
import './Card.css';
import Bilgi from './Bilgi';
import Next from './Next';
import Kati from './Kati';
import Animy from './Animy';

const Card = ({name, id}) => {
    return (
       <div className='card'>
          <section>
          <div className='card-com'>
           <img src= {`https://robohash.org/${id}?size=60x60`}  alt='robots'/>
           <h2>{name}</h2>
           </div>
           <div className='your-robots'>
               <h6>Your robots</h6>
           </div>
           <Bilgi />
           </section>
              <Next />
              <Kati />
              <Animy/>
           </div>
    );
}

export default Card;