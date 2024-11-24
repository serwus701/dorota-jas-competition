import React from 'react';
import { PersonScreenSide } from './components/PersonScreenSide';
export default function Home() {
  return (
    <div className="bg-white w-full h-screen text-black flex justify-center items-start">
      <PersonScreenSide name="dorota" percentage={75} />
      <PersonScreenSide name="jas" percentage={25} />
    </div>
  );
}
