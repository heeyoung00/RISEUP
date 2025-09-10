import React from 'react';
import './FestivalPage_LineUp.css';
import { Element } from 'react-scroll';

import Dynamicduo from './FestivalPageImg/다이나믹듀오.png'
import Park from './FestivalPageImg/박명수.png'
import Kino from './FestivalPageImg/키노.png'
import Moosong from './FestivalPageImg/편무송.png'

function FestivalPage_LineUp() {
    return (
        <Element name="LineUp" className='RiseUp_LineUp'>
            <div className='RiseUp_LineUp_Title'>
                LINE UP
            </div>
            <div className='RiseUp_LineUp_Dynamicduo'>
                <img src={Dynamicduo} />
            </div>
            <div className='RiseUp_LineUp_Park'>
                <img src={Park} />
            </div>
            <div className='RiseUp_LineUp_Kino'>
                <img src={Kino} />
            </div>
            <div className='RiseUp_LineUp_moosong'>
                <img src={Moosong} />
            </div>
        </Element>
    )
}

export default FestivalPage_LineUp;