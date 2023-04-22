import React, { useEffect, useState } from 'react'
import './App.css'
import Mielesese from "./components/Mielesese"
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
            {/* Count the Mieleseses!!!! */}
            Title
         </div>

         <div className="container">
            <Confetti
               width={565}
               height={445}
               numberOfPieces={0}
            />

            <div className="game">
               <Mielesese id={1} />
               <Mielesese id={2} />
               <Mielesese id={3} />
               <Mielesese id={4} />
               <Mielesese id={5} />
               <Mielesese id={6} />
               <Mielesese id={7} />
               <Mielesese id={8} />
               <Mielesese id={9} />
            </div>

            <div className="scores">
               score test
            </div>
         </div>
      </main>
   )
}

export default App