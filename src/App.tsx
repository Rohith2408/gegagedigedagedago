import './App.css'
import './defaults.css'
import Wrapper_responsive from './Wrapper_responsive'
import s1_avatar from '../src/assets/images/gaaa.png'
import s3_avatar from '../src/assets/images/s3_avatar.png'
import meme_1 from '../src/assets/images/1.jpeg'
import meme_2 from '../src/assets/images/2.jpeg'
import meme_3 from '../src/assets/images/3.jpeg'
import meme_4 from '../src/assets/images/4.jpeg'
import meme_5 from '../src/assets/images/5.jpeg'
import meme_6 from '../src/assets/images/6.jpeg'
import gif_1 from '../src/assets/images/g1.gif'
import video from '../src/assets/images/vid.mp4'
import gif_4 from '../src/assets/images/g4.gif'
import rock from '../src/assets/images/stone.png'
// import name from '../src/assets/images/namw.png'
import { useEffect, useRef, useState } from 'react'
import { startOrbit, stopOrbit } from './utils'
import x from '../src/assets/images/twitter.png'
import dex from '../src/assets/images/dextools.png'
import pump from '../src/assets/images/pump.png'
import copy_icon from '../src/assets/images/copy.png'
import next_icon from '../src/assets/images/next.png'
import { getAllWebsites } from './firebase'


function App() {

  const [entry,setEntry]=useState(false);
  useEffect(()=>{
    
  return ()=>stopOrbit()
  },[])

  const playVid=()=>{
    let ele:any=document.getElementById("vid");
    if(ele)
    {
      ele.play();
    }
  } 

  const handleEntry=()=>{
    playVid();
    setEntry(true);
  }

  useEffect(()=>{
    if(entry)
    {
      startOrbit("s1-wrapper","gaaa",750);
    }
  },[entry])

  return (
    <div id='app-wrapper' style={{position:"relative"}}>
      {
        !entry
        ?
        <Entryscreen setEntry={handleEntry}/>
        :
        null
      }
      <S1/>
      <S2/>
      <S3/>
      <img id='gaaa' src={gif_1} className='absolute gif1'/>
    </div>
  )
}

const S1=()=>{
  
  const [socialIcons,setSocialIcons]=useState([
    { src: x, link: "" },
    { src:dex, link: "" },
    { src:pump, link: "" },
  ]);
  const [ca,setCa]=useState("TBA")

  useEffect(()=>{
    getAllWebsites().then((doc:any)=>{
      let currentWebsite=doc.find((website:any)=>website.data.name=="gegagedigedagedago")
      console.log(currentWebsite);
      if(currentWebsite)
      {
        setSocialIcons([
          { src: x, link: currentWebsite?.data?.sociallinks?.x },
          { src: dex, link: currentWebsite?.data?.sociallinks?.dexscreener},
          { src:pump, link: currentWebsite?.data?.sociallinks?.pump},
        ]);
        setCa(currentWebsite.data.ca);
      }
    })
    let playButn=document.getElementById("play-button");
    if(playButn)
    {
      playButn.click();
    }
  },[])

  return(
    <Wrapper_responsive id="s1-wrapper" class={{outerWrapper:"s1-wrapper"}}>
      <div className='absolute' style={{left:"5%",bottom:-10}}><Rock/></div>
      <img 
        src={s1_avatar}
        className='absolute s1_avatar' 
        style={{zIndex:100}}
      />
      <div className='absolute-h-center flexbox-column flexbox-center section-gap' style={{top:"10%",gap:20}}>
        <div className="cawrapper flexbox-row flexbox-center curve">
          <p className="caHeading">CA</p>
          <p className="ca">{ca?ca:"TBA"}</p>
          <button className={"copyWrapper button-transparent"} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={"copyIcon"} src={copy_icon}></img></button>
        </div>
        <div className='flexbox-row gap' style={{gap:30}}>
        {
          socialIcons.map((item:{ src:string, link:string})=>
            <img className='socialicons' onClick={()=>window.open(item.link, '_blank')} src={item.src}/>
          )
        }
        </div>
        <video  
          id='vid'
          src={video}
          controls={false}
          muted={false}
          loop
          className='vid-wrapper'
          playsInline
          webkit-playsinline
          style={{border:"5px solid white"}}
        />
      </div>
    </Wrapper_responsive>
  )

}

const S3=()=>{

  const [bottom,setBottom]=useState(0)

  useEffect(()=>{
    let  i=setInterval(()=>{
      setBottom((curr)=>{
        return curr==0?-100:0
      })
    },1500)
    return ()=>{
      clearInterval(i)
    }
  },[])

  return (
    <Wrapper_responsive id="home-s3" class={{outerWrapper:"s3-wrapper"}}>
      <img 
        src={s3_avatar}
        className='absolute-h-center s3-avatar' 
        style={{bottom:bottom,transition:"bottom 1s"}}
      />
      {/* <img 
        src={name}
        className='s3_avatar' 
        style={{bottom:bottom,transition:"bottom 1s"}}
      /> */}
    </Wrapper_responsive>
  )
}

const S2=()=>{

  const memes=useRef([meme_1,meme_2,meme_3,meme_4,meme_5,meme_6]).current

  return(
    <Wrapper_responsive id="home-s2" class={{outerWrapper:"s2-wrapper"}}>
      <div  className='flexbox-row flexbox-center fullwidth fullheight'>
        <div className='s2-body'>
        {
          memes.map((item)=>
            <div className='meme-wrapper'>
              <img
                className='meme'
                src={item}
              />
            </div>
          )
        }
        </div>
      </div>
    </Wrapper_responsive>
  )

}

const Rock=()=>{

  const [clicked,setClicked]=useState(false)

  useEffect(()=>{
    if(clicked)
    {
      setTimeout(()=>{
        setClicked(false);
      },1500)
    }
  },[clicked])

  return(
    <div  style={{position:'relative'}}>
      <img className='rock' src={rock} style={{zIndex:1}}/>
      <img className='absolute rock-avatar' src={clicked?gif_4:""} style={{left:0,bottom:0,visibility:clicked?"visible":"hidden"}}/>
    </div>
  )
}

const Entryscreen=(props:{setEntry:any})=>{

  return(
    <div className='entry-screen flexbox-row flexbox-center fullwidth fullheight' style={{position:"fixed",top:0,zIndex:200}}>
      <div onClick={props.setEntry} className='flexbox-row flexbox-center padding gap curve entry-button'>
        {/* <span style={{fontSize:"2rem"}}>You’ve been gegagedigedageda’d.</span> */}
        <button style={{backgroundColor:'transparent'}}><span className='entry-button-text michroma-regular'>Gegage Me</span></button>
        <img src={next_icon} style={{width:"100px",height:"auto",objectFit:"contain"}}/>
      </div>
    </div>
  )

}


export default App
