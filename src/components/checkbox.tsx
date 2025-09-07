import { useState } from 'react'
import './checkbox.css'
function Checkbox() {

    const [subscribed, isSubscribed] = useState<boolean>(false)
    const [submit,setSubmit] = useState<boolean>(false)
    const [err, setErr] = useState<string>('')
    const [card, setCard] = useState<string[]>([])

    const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {value, checked} = e.target

        if(checked) {

            setCard([...card, value])

        } else {

            setCard(card.filter((card) => card !== value))

        }

    }
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()

        if(!subscribed) {

            setErr('You must subscribe first')
            setSubmit(false)
            return
        }

        if(card.length === 0) {

            setErr('You must select a card')
            setSubmit(false)
            return
        }

        setErr('')
        setSubmit(true)

    }

  

    return(

        
        <section className='checkboxContainer'>

            <div className='containerItems'>


            

            <div>

            
            <label htmlFor="Subscribed" className='cardLabel'>
            <input type="checkbox" name="Subscribed" id="Subscribed" checked={subscribed} 
            onChange={(e) => isSubscribed(e.target.checked)}/>

            Subscribed 

            </label>

            </div>


                <div>

                
               <label htmlFor="Visa" className='cardLabel'>
            <input type="checkbox" name="Visa" id="Visa" value="VISA" 
            checked={card.includes('VISA')} onChange={handleCardChange}/>

            Visa 

            </label>

            </div>

               <div>

                
               <label htmlFor="MasterCard" className='cardLabel'>
            <input type="checkbox" name="MasterCard" value="MASTERCARD" id="MasterCard" 
            checked={card.includes('MASTERCARD')} onChange={handleCardChange}/>

            MasterCard 

            </label>

            </div>
            
            <div className='containerButtonCheckbox'>
            <button onClick={handleSubmit} type="button" className="buttonCheckbox focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </div>



            </div>

            <div>

                  {submit && <p>You are subscribed to {card.join(', ')}</p>}

            {err && <p>{err}</p>}
            </div>

        </section>
        

    )

}

export default Checkbox