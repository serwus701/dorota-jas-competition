import React from 'react';
import { PersonScreenSide } from './components/PersonScreenSide';


const countries1 = [
  'polska',
  'niemcy',
  'francja',
]

const countries2 = [
  'rosja',
  'niemcy',
  'francja',
  'tailandia'
]

const allcountriesnumber = 10


export default function Home() {
  return (
    <div className="bg-white w-full h-screen text-black flex flex-col justify-start items-center">

      <h1 className='text-6xl mt-5'>Wyścig szczurów - edycja uzależnieni</h1>
      <div className='flex flex-row justify-center'>
        <PersonScreenSide name="Dorota" panelSide='R' yourCountries={countries1} oponentCountries={countries2} allCountriesNumber={allcountriesnumber} />
        <PersonScreenSide name="Jaś" panelSide='L' yourCountries={countries2} oponentCountries={countries1} allCountriesNumber={allcountriesnumber} />
      </div>
      <div className='w-full justify-center flex'>
        <h1 className='text-2xl mt-10'>Odwiedzone państwa</h1>
      </div>
    </div>
  );
}
