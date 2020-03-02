import React, { Fragment } from 'react';
import './Card.css';
import 'tachyons';

const Card = () => {
    return(
        <Fragment>
            <div className='dib br3 bw2 pa3 ma2 orange bg-near-black shadow-4 grow'>
            {/* dib = display:inline-block; br3 = border-radius:.5rem; bw2 = border-width:.25rem ; pa3 = padding:var(--spacing-medium); ma2 = margin:var(--spacing-small); shadow-5 = box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 ) */}
                <h3 className='tc'>Premium</h3>
                <p >$399 <span>/ month</span></p>
                <p >That’s only $13.30 per meal</p>
                <ul >
                    <li>1 meal every day</li>
                    <li>Order 24/7</li>
                </ul>
                <a >Sign up now</a>
            </div>
        </Fragment>
    )
}

export default Card;