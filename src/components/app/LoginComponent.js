"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {isUserToken } from "@/config/userauth";
import { isCouponeCode } from "@/config/validecoupone";
import HeaderFirst from "../shared/HeaderFirst";
import FooterComponent from "../shared/FooterComponent";
import LoginPart from "../shared/LoginPart";
import OtpPart from "../shared/OtpPart";
import { useSearchutm } from "@/context/AppProvider";



export default function LoginComponent() {  
    const [isMobile, setIsMobile] = useState(false);
    const [phonenumber, setPhonenumber] = useState('');
    const userToken   =  isUserToken();
    const searchParams = useSearchParams();
    const { setGaUtm, gaUtm } = useSearchutm();

    const isCC = isCouponeCode();
    const { push } = useRouter();

    React.useEffect(() => {
      setGaUtm((prev) => {
        return {
          ...prev,
          landmark: searchParams.get('utm_campaign') || ''
        }
      });
    }, [searchParams])

 
    console.log(gaUtm);
    

    useEffect(() => {
      if(userToken && !isCC) { push("/dashboard"); return }
      if(userToken && isCC) { push("/getcoupone"); return }
    }, []);
  
    const isMobStatus = (val) => {
      setIsMobile(val)
    }
    const getMobNumber = (val) => {
      setPhonenumber(val)
    }

  return (
  <>
    <HeaderFirst />
    <div className="lamp1"><Image src="/assets/images/lamp1.png" width={57} height={79} alt="Lamp" quality={100} /></div>
    <div className="lamp2"><Image src="/assets/images/lamp2.png" width={46} height={60} alt="Lamp" quality={100} /></div>
    <div className="lamp4"><Image src="/assets/images/lamp1.png" width={57} height={79} alt="Lamp" quality={100} /></div>
    <div className="lamp5"><Image src="/assets/images/lamp3.png" width={57} height={79} alt="Lamp" quality={100} /></div>
    <div className="lamp6"><Image src="/assets/images/lamp.png" width={57} height={79} alt="Lamp" quality={100} /></div>
    <div className="firework"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework2"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>

    <div className="firework3"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework4"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework5"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework6"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className='screenmain'>
      <section className="screencontainer">
        { !isMobile ? <LoginPart isMobStatus={isMobStatus} getMobNumber={getMobNumber} phonenumber={phonenumber} /> :  <OtpPart isMobStatus={isMobStatus} getMobNumber={getMobNumber} phonenumber={phonenumber} /> }
      </section>
    </div>
    <FooterComponent />
  </>
  )
}



 