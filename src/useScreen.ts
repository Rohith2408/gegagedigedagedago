import { useEffect, useState } from "react";

export type ScreenType = 'mobile' | 'tablet' | 'pc'|"laptop";

const getScreenType = (width: number): ScreenType => {
  if (width <500) return 'mobile';
  else if (width>=500 && width<1023) return 'tablet';
  else if (width>=1024 && width<1920) return 'laptop';
  else if (width>=1920) return 'pc';
  return 'pc';
};

const useScreen=()=>{

    const [screenType, setScreenType] = useState<ScreenType>(getScreenType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenType;

}

export default useScreen