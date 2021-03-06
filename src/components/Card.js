import React from 'react';
import './Card.css';

// Dumb(Presentational) Component
const Card = ({id, name, email, phone, address}) => {
    /* 
    const Card = (props) => {
        const {id, name, email, phone, address} = props;
    };
    */

    return(
        <div className='dib br3 bw2 pt4 ph4 ma2 orange bg-near-black shadow-4 grow'>
        {/* dib = display:inline-block; br3 = border-radius:.5rem; bw2 = border-width:.25rem;
            pa3 = padding:var(--spacing-medium); ma2 = margin:var(--spacing-small); shadow-5 = box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 ) */}
            <img className='br-100' alt='doppelganger' src={`https://randomuser.me/api/portraits/men/${id}.jpg`} style={{width: 250}}></img>  {/* style - outside bracket is a javascript expression, inside one is an object with CSS style */}
            <h3 className='mv4'>{name}</h3>
            <div className='tl'>
                <p><em><strong>Email:</strong></em><br></br>{email}</p>
                <p><em><strong>Phone:</strong></em><br></br>{phone}</p>
                <p><em><strong>Address:</strong></em><br></br>{address}</p>
            </div>
            <p className='tr f3'>//</p>            
        </div>
    )
}

export default Card;