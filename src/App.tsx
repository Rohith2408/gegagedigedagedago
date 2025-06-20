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
import gif_2 from '../src/assets/images/g2.gif'
import gif_3 from '../src/assets/images/g3.gif'
import gif_4 from '../src/assets/images/g4.gif'
import gif_5 from '../src/assets/images/g5.gif'
import rock from '../src/assets/images/stone.png'
import name from '../src/assets/images/namw.png'
import { useEffect, useRef, useState } from 'react'

function App() {

  return (
    <div>
      <S1/>
      <S2/>
      <S3/>
    </div>
  )
}

const S1=()=>{

  return(
    <Wrapper_responsive id="home-s1" class={{outerWrapper:"s1-wrapper"}}>
      <div className='absolute' style={{left:"5%",bottom:-10}}><Rock/></div>
      <img 
        src={s1_avatar}
        className='absolute-h-center s1_avatar' 
      />
    </Wrapper_responsive>
  )

}

const S3=()=>{

  const [bottom,setBottom]=useState(0)

  useEffect(()=>{
    let  i=setInterval(()=>{
      setBottom((curr)=>{
        console.log("ddd",curr)
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
        className='absolute-h-center s3_avatar' 
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
    <div onClick={()=>!clicked?setClicked(true):false} style={{position:'relative'}}>
      <img className='rock' src={rock} style={{zIndex:1}}/>
      <img className='absolute rock-avatar' src={clicked?gif_4:""} style={{zIndex:-1,left:0,bottom:0,visibility:clicked?"visible":"hidden"}}/>
    </div>
  )
}

export default App
