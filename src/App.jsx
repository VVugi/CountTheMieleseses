import React, { useEffect, useState } from 'react'
import './App.css'
import Confetti from 'react-confetti';

function App()
{
   const [mieleseses, setMieleseses] = useState(Math.floor(Math.random() * 30) + 10);

   for(let i = 0; i < mieleseses; i++)
   {
      // <Mielesese />
   }

   return (
      <main>
         <div className="title">
            Count the Mieleseses!!!!
         </div>

         <div className="container">
            <Confetti
               width={565}
               height={445}
               numberOfPieces={0}
            />

            <div className="game">
               game test
            </div>

            <div className="scores">
               score test
            </div>
         </div>
      </main>
   )
}

export default App