import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

/* 
context api
1. call createContext with a default value
2. set a variable of the context with uppercase
3. Make sure you export the context to use it in other places
4. Wrap your child content using RingContext.Provider
5. Provide a value
6. to consume the context from child component useContext hook and you will need to pass the context name
*/


export const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'Diamond Ring'
    return (
        <RingContext.Provider value='alur ring'>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <button onClick={() => setHouse(house + 1)}>Buy a house</button>
                <p>House:{house}</p>
                <section style={{ display: "flex" }} >
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;