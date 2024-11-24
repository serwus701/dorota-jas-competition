import React from "react";
import Image from "next/image";

interface PersonScreenSideProps {
    percentage: number;
    name: string;
}

export const PersonScreenSide: React.FC<PersonScreenSideProps> = ({ percentage, name }) => {
    return (
        <div className="w-2/5 flex items-center justify-start mx-5 flex-col">
            <h1 className="text-5xl my-20">{name}</h1>
            <div className="flex flex-row items-center justify-center">
                <Image src="/test.png" alt="" className="w-72 h-72 mx-5" width={500} height={500} />
                < div className="w-20 h-72 border border-gray-300 bg-gray-100 relative" >
                    <div
                        className="bg-green-500 absolute bottom-0 w-full"
                        style={{ height: `${percentage}%` }}
                    />
                </ div>
            </div>

        </div >
    );
}