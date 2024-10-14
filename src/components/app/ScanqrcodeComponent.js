"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QrReader from '../core/QrReader';
import { getUserID } from "@/config/userauth";
import Loader from "../shared/LoaderComponent";
import { ipaddress, osdetails, browserdetails, geoLatitude, geoLongitude } from "../core/jio";
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import { _get } from "@/config/apiClient";
import CountUp from 'react-countup';
import TotalrewardpointsComponent from '../shared/TotalrewardpointsComponent';
import { _post } from "@/config/apiClient";
import HeaderDashboard from '../shared/HeaderDashboard';
import FooterComponent from '../shared/FooterComponent';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { setUserInfo, removeUserInfo } from "@/config/userinfo";
import {  getUserMobile, isUserToken } from "@/config/userauth";



export default function ScanqrcodeComponent() {
  const [pagemsg, setPagemsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrcode, setQrcode] = useState(true);
  const [scandata, setScandata] = useState('');
  const [couponecode, setCouponecode] = useState('');
  const [manualQrcode, setManualQrcode] = useState('');
  const [manualQrError, setManualQrError] = useState('');
  const [mounted, setMounted] = useState(true);
  const [mounted2, setMounted2] = useState(true);
  const[userstatus, setUserstatus] = useState('0');

  const { push } = useRouter();
  const userToken   =  isUserToken();
  const userID = getUserID();
  const userMobile = getUserMobile();
  const latInfo = geoLatitude();
  const lonInfo = geoLongitude();
  const ipInfo = ipaddress();
  const osInfo = osdetails();
  const browserInfo = browserdetails();
  const rewardspoints = TotalrewardpointsComponent();

  const onInputmaxLength = (e) => {
    if(e.target.value.length > e.target.maxLength)
    {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }

  const handalqrisvailable = (val) => { 
    setQrcode(val);
  }
  const getData =(val) =>{
    setScandata(val);
  }

  



  useEffect(() => {
      const sdURL = scandata.split("?") || '';
      if(!qrcode)
      {
          if(sdURL[0] === process.env.NEXT_PUBLIC_COUPON_URL)
            {
              
                const couponvalue = sdURL[1].split("=");
                setCouponecode(couponvalue[1]);
            }
            else
            {
                toast.error("Please scan qr code with kerakoll app.");
                setTimeout(function(){window.location.reload();},2000);
            }
      }
  }, [qrcode]);

  useEffect(() => {
    if(couponecode !== '')
    {
      handleSubmitCode();
    }
}, [couponecode]);
 
 
const changeManual = (e) => {
  setManualQrError(''); 
  setManualQrcode(e.target.value); 
}

const handleQrCodeManually = (e) => {
  e.preventDefault();
  if(manualQrcode === '')
  {
    setManualQrError('Please enter QR code');
    return;
  }
  setManualQrError('');
  setCouponecode(manualQrcode);
}

  const handleSubmitCode = () => 
  {
    setLoading(true);
    setPagemsg('Validating Coupon');
    const qrdata = {
      userid: userID,
      couponcode: couponecode,
      scanlocation: `{'Latitude':'${latInfo}', 'Longitude':'${lonInfo}'}`, 
      ipaddress: ipInfo,
      osdetails: osInfo,
      browserdetails: browserInfo
    }
        _post("Customer/ValidateCouponAndSave", qrdata)
        .then((res) => {
          setTimeout(function(){setLoading(false);},2000); 
           console.log(res)
          if(res.data.resultcode === 0)
          {
              toast.success("Your code has been successfully scanned ");
              push(`/scanqrcode/${res.data.result[0].pointid}`);
          }
          
          else if(res.data.resultcode === -101)
          {
              toast.error("This code has already been scanned. Try again.");
              setTimeout(function(){window.location.reload(); },2000);
          } 
          else if(res.data.resultcode === -102)
          {
              toast.error("This coupon code is invalid, please try again. After 3 incorrect attempts, your account will be deactivated.");
              setTimeout(function(){window.location.reload(); },2000);
          } 
          else if(res.data.resultcode === -103)
            {
              toast.error("This coupon code is invalid, please try again. After 3 incorrect attempts, your account will be deactivated.");
              setTimeout(function(){window.location.reload(); },2000);
          } 
          else // if(res.data.resultcode === -100)
          {
              toast.error("There is an issue while availing the coupon. kindly contact to the support team.");
              setTimeout(function(){window.location.reload(); },2000);
              
          }
        }).catch((err) => {
          setLoading(false); 
          console.log(err);
          window.location.reload();
        });

        _post("Customer/UserInfo?userid=0&phonenumber="+ userMobile, qrdata)
    .then((res2) => {
      setTimeout(function(){setLoading(false);},2000); 

      console.log("UserInfo response - ", res2);
      if(res2.data.result.isactive === "0") { 
        toast.info('Your account is blocked due to three wrong attempts. Please connect with your respective sales person.');
        setTimeout(function(){window.location.reload(); },2000);
       }
      }).catch((err) => {
          setLoading(false);
          console.log(err);
          window.location.reload();
      });

  }

  return (
    <div className='outsidescreen'>
      <ErrorBoundary>
        <HeaderDashboard />
      </ErrorBoundary>
      <div className="firework3"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework4"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework5"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework6"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework7"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework8"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework9"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
      <div className="screenmain screenqrcode" > 
        <div className="screencontainer">
          { couponecode !== '' ? <>
            <div className="scanqrcodecontainer">
              <h1>Scan Data  <span>({scandata})</span></h1>
              <h2>Coupone Code: <span>{couponecode}</span></h2>
              <form className="scanqrcodeForm" onSubmit={handleSubmitCode} style={{'display':'none'}}>
                  <button>Validate Coupon</button>
              </form>
            </div>
          </>:<>
            <div className="scanqrcodesection">
                <h2>Scan QR code</h2>
                <QrReader onData={handalqrisvailable} onSuccess={getData} />
            </div>
            <div className='qrcodemanually'>
                <h6><span>OR</span></h6>
                <h5>Enter QR Code Manually</h5>

                  <form className='qrcodemanuallyForm' onSubmit={handleQrCodeManually}> 
                    <input type='text' name='manual-enter-copone-code' value={manualQrcode} onChange={changeManual} autoComplete="off" maxLength={10} onInput={onInputmaxLength} placeholder='Enter QR Code' />
                    <button>Submit</button>
                  </form>

                { manualQrError && <h4>{manualQrError}</h4> }
            </div>
          </>} 

        </div>


          <div className="screenqrbottom">
            <h2>
              <em>CLUB WALLET</em>
              <CountUp duration={2} start={0}  delay={1}  end={rewardspoints} /> <span>Points</span>
            </h2>
            <p><Link href='/rewards'>view points</Link></p>
          </div>


      </div> 
 

      <FooterComponent />
      
       <Loader showStatus={loading} message={pagemsg} /> 
    </div>
  )
}
