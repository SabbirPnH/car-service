'use client'
import React, { useEffect } from 'react';
import "../../../public/css/textcircel.css";

export default function TextCircel() {
    useEffect(() => {
        const text = document.querySelector(".text p");
        if (text) {
            text.innerHTML = text.innerText
                .split("")
                .map(
                    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
                )
                .join("");
        }
    }, []); // Empty dependency array to run only once after the component mounts

    return (
        <div>
            <div className="circle mx-auto ">
                <div className="logo"></div>
                <div className="text">
                    <p>
                    Healthy and - Delicious Fresh  -
                    </p>
                </div>
            </div>
        </div>
    );
}
