import type { ScreenType } from "./useScreen";

let Timer={time:0};

let cycleTimer:any;

export const orbit=(wrapperId:string,avatarId:string,timePeriod:number,screen:ScreenType)=>{
    let wrapper=document.getElementById(wrapperId);
    let boundary=wrapper?.getBoundingClientRect();
    if(boundary)
    {
        let radius=boundary.height/2;//(screen=="laptop"||screen=="pc")?boundary?.width/4:boundary.height/2;
        let boundaryOffset={x:boundary?.left,y:boundary?.top+window.scrollY};
        let center={x:boundaryOffset.x+(boundary.width/2),y:-100};
        let obj=document.getElementById(avatarId);
        console.log("center",center,boundaryOffset,window.scrollY);
        if(wrapper && obj && boundary){
            let newPos={y:center.y+(radius*Math.sin(Timer.time*(Math.PI*2/timePeriod))),x:center.x+(radius*Math.cos(Timer.time*(Math.PI*2/timePeriod)))};
            obj.style.setProperty("top",newPos.y+"px","important");
            obj.style.setProperty("left",newPos.x+"px","important");
        }
    }
    Timer.time+=1;
}

export const stopOrbit=()=>{
    Timer.time=0;
    clearInterval(cycleTimer);
}

export const startOrbit=(wrapperId:string,avatarId:string,timePeriod:number,screen:ScreenType)=>{
    cycleTimer=setInterval(()=>orbit(wrapperId,avatarId,timePeriod,screen),1)
}