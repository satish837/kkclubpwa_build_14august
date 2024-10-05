"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { getUserID } from "@/config/userauth";
import Loader from "../shared/LoaderComponent";
import TotalrewardpointsComponent from '../shared/TotalrewardpointsComponent';
import CountUp from 'react-countup';
import { _get } from "@/config/apiClient";
import HeaderDashboard from "../shared/HeaderDashboard";
import FooterComponent from "../shared/FooterComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function GoldseGrowth() {
    const [pagemsg, setPagemsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(true);
    const [pointhistory, setPointhistory] = useState({});
    const [nodata, setNodata] = useState('');
    const userID = getUserID();
   
    
    useEffect(() => {
        setLoading(true);
        setPagemsg('Reward history fetching');
        _get("Customer/UserRewardPointsHistory?userid="+ userID)
        .then((res) => {
            console.log("UserRewardPointsHistory - response - ", res);
            setLoading(false);
            if (mounted)
            {
              if(res.data.result.length !== 0)
              {
                setPointhistory(res.data.result)
              }
              else
              {
                setNodata('Reward history not available.');
              }
            }
        }).catch((error) => {
            setLoading(false);
           // console.log("UserRewardPointsHistory - error - ", error);
           console.log(error.message);
        });
        return () => { setMounted(false); }
      }, [userID]);
    
     const points = TotalrewardpointsComponent();

   
  return (<>
    <ErrorBoundary>
        <HeaderDashboard />
    </ErrorBoundary>
    <div className="firework"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework2"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>

    <div className="firework3"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework4"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework5"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework6"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework7"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework8"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="firework9"><Image src="/assets/images/fire-work-img.png" width={151} height={151} alt="crach" quality={100} /></div>
    <div className="screenmain redeemscreen"> 
        <div className="screencontainer">

            <div className='redeemcontainer goldsegrowth'>
                <Image className='rdm_2' src="/assets/images/dash-start.png" width={95} height={95} alt="redeem img" quality={99} />
                <Image className='rdm_3' src="/assets/images/dash-start.png" width={95} height={95} alt="redeem img" quality={99} />
                <Image className='rdm_4' src="/assets/images/dash-start.png" width={95} height={95} alt="redeem img" quality={99} />

                <aside>
                    <Image src="/assets/images/growth.png" width={459} height={448} alt="redeem img" quality={99} />
                </aside>
                <h2>Gold se Growth</h2>
                

                { nodata ? <div className="norewardsavailable">{nodata}</div> : (
            <div className="card-cont">
              <ul>
                
                {  pointhistory.map &&  pointhistory.filter((val) => val.earnedpoints == 1000 || val.earnedpoints == 11 || val.earnedpoints == 21 || val.earnedpoints == 51 || val.earnedpoints == 101 ).map((val, index) => <li key={val.pointid}>
                <div className="icon"><Image src="/assets/images/coupon-icon.png" width={175} height={174} alt="redeem img" quality={100} /></div>
                            <h3>{ val.earnedpoints }<span>pt</span></h3>
                            <h4>Redeem Points</h4>
                            <h5>in your club wallet</h5>
                </li>) }
              </ul>
            </div>
            )}
            </div>  
            
            
        
        </div>

    
        <div className="profile_logobottom">
            <Image src="/assets/images/logo.png" width={448} height={80} alt="logo" quality={100} />
        </div>

    </div>


    <FooterComponent />

</>)
}
