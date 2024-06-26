import React from 'react'
import Vectary from '../../images/Vectary_texture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import '../../styles/IntroPage.css'
import { Link } from 'react-router-dom'

const IntroPage = () => {
    return (
        <div className='IntroPage'>
            <div className="leftinfo">
                <h1>Get help for your mental health</h1>
                <p>The word healthcare means different things to different people. Some folks might think
                    of their insurance provider and access to medical services, others may think of their
                    personal self-care; the health of their mental, spiritual, and physical well-being.
                </p>
                <Link to='/chatbot' style={{textDecoration:'none',width:0,height:0}}><button>Talk to Melly <FontAwesomeIcon icon={faArrowRight} className='arrow'/></button></Link>
            </div>
            
            <div className="rightimg">
                <img src={Vectary} alt="" srcset="" />
            </div>
        </div>
    )
}

export default IntroPage
