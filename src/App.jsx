import React, { useEffect, useState } from 'react'
import Background from './Components/Background';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';

const App = () => {
  let heroData = [
    {text1 : "Dive into", text2 : "What you love"},
    {text1 : "Indulge", text2 : "your passion"},
    {text1 : "Give into", text2 : " Your passion"},

  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count === 2 ? 0 : count + 1})
    },3000)
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
       setPlayStatus={setPlayStatus}
       playStatus={playStatus}
       heroCount={heroCount}
       heroData={heroData[heroCount]}
       setHeroCount={setHeroCount}
       />

    </div>
  )
}

export default App