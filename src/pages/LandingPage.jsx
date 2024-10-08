import { ImageDesign } from "../components/ImageDesign";
import coatImage from '../assets/coat.png';
import carImage from '../assets/car.png';
import glassImage from '../assets/glass.png';
import watchImage from '../assets/watch.png';
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
    const [index, setIndex] = useState(0);
    const cardsRef = useRef(null);

    const images = [
        {
            imageURL:coatImage,
            upperText:"Luxury Suits",
            mainText:"Andmenlife Website"
        },
        {
            imageURL:watchImage,
            upperText:"Watches",
            mainText:"Bretiling Website"
        },
        {
            imageURL:glassImage,
            upperText:"Photography",
            mainText:"Andreas Portfolio"
        },
        {
            imageURL:carImage,
            upperText:"Luxury Car",
            mainText:"Mercedes Website"
        },
    ];

    // Animate cards on index change
    useLayoutEffect(() => {
        gsap.to(cardsRef.current, {
            y: -index * 700,
            duration: 1.5,
            ease: "back.out(1.3)",
        });
    }, [index]);

    // Handle "Next" and "Previous" buttons
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <Navbar />
            <div className="h-screen overflow-hidden">
                <div ref={cardsRef} className="h-full">
                    <ul className="cards">
                        {images.map((image, i) => (
                            <li key={i}>
                                <ImageDesign imageURL={image.imageURL} upperText={image.upperText} mainText={image.mainText} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="bottom-10 left-0 right-0 flex justify-center gap-4 z-10 fixed">
                    <button onClick={handlePrevious} className="bg-gray-700 text-white py-2 px-4 rounded-full">
                        Prev
                    </button>
                    <button onClick={handleNext} className="bg-gray-700 text-white py-2 px-4 rounded-full">
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};
