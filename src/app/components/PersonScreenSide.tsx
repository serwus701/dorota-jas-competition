import React from "react";
import Image from "next/image";

interface PersonScreenSideProps {
    name: string;
    panelSide: 'L' | 'R';
    yourCountries: string[];
    oponentCountries: string[];
    allCountriesNumber: number;
}

export const PersonScreenSide: React.FC<PersonScreenSideProps> = ({ name, panelSide, yourCountries, oponentCountries, allCountriesNumber }) => {
    const percentage = (yourCountries.length / allCountriesNumber) * 100;
    const onlyYourtCountries = yourCountries.filter(country => !oponentCountries.includes(country));

    return (
        <div className="w-2/5 flex items-center justify-start mx-5 flex-col">
            <h1 className="text-5xl my-20">{name}</h1>
            <div className="flex flex-row items-center justify-center">
                {panelSide === 'R' && (
                    <Image src="/test.png" alt="" className="w-72 h-72 mx-5" width={500} height={500} />
                )}
                <div className="w-24 h-72 border border-gray-300 bg-gray-100 relative flex items-center justify-center">
                    <div
                        className="bg-green-500 absolute bottom-0 w-full"
                        style={{ height: `${percentage}%` }}
                    />
                    <span className="absolute text-black font-bold">
                        {percentage}%
                    </span>
                </div>
                {panelSide === 'L' && (
                    <Image src="/test.png" alt="" className="w-72 h-72 mx-5" width={500} height={500} />
                )}
            </div>

            <div className="w-full h-40 overflow-y-auto mt-8">
                <h2 className="text-2xl mb-2">{`W tych krajach tylko ty był${name === 'Dorota' ? 'a' : 'e'}ś:`}</h2>
                <ul className="space-y-2">
                    {onlyYourtCountries.map((country, index) => (
                        <li key={index} className="text-lg">{country}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
