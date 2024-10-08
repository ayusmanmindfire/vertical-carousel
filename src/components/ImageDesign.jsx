export const ImageDesign = ({ imageURL,upperText, mainText }) => {
    return (
        <>
            <div className="flex m-5  p-[40px] justify-center">
                
                <div className="relative">
                    <div className="">
                    <img src={imageURL} alt="imageS" className="object-cover w-[800px] h-[600px] brightness-50" />
                    </div>
                    <div className="absolute bottom-1/2 left-[25%] ">
                        <div className="text-lg text-white px-40 py-5">{upperText}</div>
                        <div className="text-5xl font-bold text-white">{mainText}</div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}