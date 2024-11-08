"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { setCouponeCode, isCouponeCode } from "@/config/validecoupone";
import { isBearerToken, setBearerToken  } from '@/config/bearerauth';
import { isUserToken } from '@/config/userauth';
 
export default function HomeComponent() {
  const [bt, setBT] = useState(0);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const getqrcode = searchParams.get('code');
  const isCC = isCouponeCode();
  const isBT = isBearerToken();
  const isUT = isUserToken();

  useEffect(() => {
    if(getqrcode !== null) { setCouponeCode(getqrcode); }
  }, [getqrcode]);

  useEffect(() => {
    if(isBT && isUT && isCC) { push("/getcoupone"); return }

    if(!isBT)
    {
      setBT(1);
      setBearerToken('home');
    }
    else
    {
      setBT(2);
      setTimeout(function(){  isUT && !isCC ? push("/dashboard") : isUT && isCC ? push("/getcoupone") : push("/login"); }, 10000);
    }
  },[]);

  
  
  return (<>
   <iframe
        src="https://fireworks-kk.netlify.app/landing"
        title="Fireworks"
        width="100%"
        height="100vh"
        frameBorder="0"
        className='fireframe'
        allowFullScreen
      />
      <div className="videoloader">
        <div className='videoconainer'>
          
       { bt === 2 ? <Image src="/assets/images/logo.png" width={270} height={50} alt="logo" quality={99} /> : null }
 
       { bt === 1 ? <video autoPlay muted playsInline style={{ width: '308px', height: '58px' }} poster="/assets/images/logo.png">
          <source src="/assets/videos/homevideo-unit.mp4" type="video/mp4" />
        </video> : null }

        </div>
    </div>
  </>);
}
 