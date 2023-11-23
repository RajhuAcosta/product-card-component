import { useState,useEffect } from "react";

const Card = ({
  title,
  type,
  imgMobile,
  imgDesktop,
  text,
  currentValue,
  pastValue,
}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <section className="bg-[hsl(0,0%,100%)] rounded-lg overflow-hidden lg:flex">
      <picture className="w-auto h-auto">
        <div className={`w-[343px] h-[240px] bg-contain lg:bg-conatain lg:w-[340px] lg:h-[510px]`} style={{backgroundImage: windowWidth>=1024?`url(${imgDesktop})`:`url(${imgMobile})`}}></div>
      </picture>
      <div className="px-6 py-6 lg:px-10 lg:w-[350px]">
        <h2 className="uppercase text-xs text-[hsl(228,12%,48%)] font-['Montserrat'] lg:mt-3 lg:mb-5 lg:text-sm" style={{letterSpacing: "0.5rem"}}>{type}</h2>
        <h1 className="capitalize font-['Fraunces'] text-3xl mt-2 mb-2 lg:text-4xl lg:w-[250px]">{title}</h1>
        <p className="font-['Montserrat'] text-[hsl(228,12%,48%)] text-sm lg:text-base lg:mt-7">{text}</p>
        <div className="flex gap-5 items-center mt-8 mb-7">
          <h3 className="text-[hsl(158,36%,37%)] font-['Fraunces'] font-bold text-3xl">
            ${currentValue}
          </h3>
          <p className="text-[hsl(228,12%,48%)] line-through font-['Montserrat']">${pastValue}</p>
        </div>
        <button className="bg-[hsl(158,36%,37%)] text-[hsl(0,0%,100%)] font-['Montserrat'] font-bold text-sm lg:text-lg lg:py-3.5 flex gap-3 items-center w-full justify-center py-2 rounded-md lg:rounded-lg lg:mb-3">
          <img src="/icon-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>    
    </section>
  );
};
export default Card;
