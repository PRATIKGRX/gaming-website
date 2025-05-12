
import { useState } from "react";
import { Star } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
const Characters = () => {
  //tarck which avatar is selecetd
  const [selectedAvatar, setSlectedAvatar] = useState("VIKI");
  //simplified avatar data
  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars: 4,
    },
  };
  //get current avatar data
  const currentAvatar = Avatar[selectedAvatar];
  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%] ">
      {/* section titel */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14  mb-8"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>
      {/* main conternt area */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* left side - avatar info and selection */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* selected avatar infor card */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            <h1 className="text-2xl font-semibold mb-2">
              {currentAvatar.name}
            </h1>
            {/* avatar statistics */}
            <div className="space-y-3 mb-16">
              {/* power stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.power}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.power}</span>
              </div>
              {/* Stable stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.stable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.stable}</span>
              </div>
              {/* penetrate stat */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Penetrate</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.penetrate}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.penetrate}</span>
              </div>
              {/* portable stats */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>
                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currentAvatar.portable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currentAvatar.portable}</span>
              </div>
            </div>
            {/* action buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 tansition-all duration-300">
                Porticient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 tansition-all duration-300">
                Redemption
              </button>
            </div>
          </div>
          {/* avatar selection card */}
          <div className="grid grid-cols-2 gap-4 ">
            {/* viki card */}
            <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300" onClick={()=>setSlectedAvatar("VIKI")}>
                <div className="text-lg mb-2">
                    VIKI
                </div>
                {/* avatar visual placeholde */}
                <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                    <img src="/images/VIKI.png" alt="viki-img" />

                </div>
                {/* star ratingss */}
                <div className="flex">
                    {[...Array(3)].map((_,i)=>(
                        <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-500"/>
                    ))}
                </div>
                {/* highlight for seleceted avatar */}
                {selectedAvatar === "VIKI" && (
                    <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
                )}
            </div>
            {/* EVA card */}
            <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300" onClick={()=>setSlectedAvatar("EVA")}>
                <div className="text-lg mb-2">
                    EVA
                </div>
                {/* avatar visual placeholde */}
                <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                    <img src="/images/EVA.png" alt="EVA-img" />
                </div>
                {/* star ratingss */}
                <div className="flex">
                    {[...Array(4)].map((_,i)=>(
                        <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-500"/>
                    ))}
                </div>
                {/* highlight for seleceted avatar */}
                {selectedAvatar === "EVA" && (
                    <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
                )}
            </div>
          </div>
        </div>
        {/* right side contiona; 3d model */}
        <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden ">
        <AnimatePresence mode="wait">

        {selectedAvatar === "VIKI"? (
          <motion.div key="VIKI" className="absolute inset-0"
          initial={{x:"100%"}}
          animate={{x:0}}
          exit={{x:"-100%"}}
          transition={{duration: 0.5}}
          >
             <Spline scene="https://prod.spline.design/A1c2FTaOTMr0gjBr/scene.splinecode" />



          </motion.div>
        ) : (
          <motion.div key="EVA" className="absolute inset-0"
          initial={{x:"100%"}}
          animate={{x:0}}
          exit={{x:"-100%"}}
          transition={{duration: 0.5}}
          >
            <Spline scene="https://prod.spline.design/ZA9AzztallNT-TSu/scene.splinecode" />



          </motion.div>
        )
        }
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Characters;
