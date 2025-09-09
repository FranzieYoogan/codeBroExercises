import './emote.css'
import wink from '../assets/icons/wink.png'
import confusion from '../assets/icons/confusion.png'
import { useState } from 'react'
function Emote() {

    const [active, setActive] = useState<boolean>(false)

    const handleClick = () => {

        setActive(!active)

    }

    return(

        <section className='emoteContainer'>

                <div onClick={handleClick} className={`emoteItemsContainer ${active ? 'emoteActive' : ''}`}>
                    
                    <div>
                        <h1 className='emoteText'>Click me </h1>
                    </div>
                    
                    <div>

                        {!active  ? <img className='emoteImage' src={wink} alt="" /> : <img className='emoteImage' src={confusion} alt="" />}
                        
                    </div>
                    
                </div>

        </section>

    )

}

export default Emote