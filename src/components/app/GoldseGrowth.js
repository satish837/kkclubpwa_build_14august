"use client";
import Image from 'next/image';
import { _get } from "@/config/apiClient";
import HeaderDashboard from '../shared/HeaderDashboard';
import FooterComponent from '../shared/FooterComponent';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export default function GoldseGrowth() {


   
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
                <div className="card-cont">
                    <ul>
                        <li>
                            <div className="icon"><Image src="/assets/images/coupon-icon.png" width={175} height={174} alt="redeem img" quality={100} /></div>
                            <h3>1000<span>pt</span></h3>
                            <h4>Redeem Points</h4>
                            <h5>in your club wallet</h5>
                        </li>
                        <li>
                            <div className="icon"><Image src="/assets/images/coupon-icon.png" width={175} height={174} alt="redeem img" quality={100} /></div>
                            <h3>5000<span>pt</span></h3>
                            <h4>Redeem Points</h4>
                            <h5>in your club wallet</h5>
                        </li>
                        <li>
                            <div className="icon"><Image src="/assets/images/coupon-icon.png" width={175} height={174} alt="redeem img" quality={100} /></div>
                            <h3>50000<span>pt</span></h3>
                            <h4>Redeem Points</h4>
                            <h5>in your club wallet</h5>
                        </li>
                        <li>
                            <div className="icon"><Image src="/assets/images/coupon-icon.png" width={175} height={174} alt="redeem img" quality={100} /></div>
                            <h3>100000<span>pt</span></h3>
                            <h4>Redeem Points</h4>
                            <h5>in your club wallet</h5>
                        </li>
                    </ul>
                </div>
            </div>  
            
            
        
        </div>

    
        <div className="profile_logobottom">
            <Image src="/assets/images/logo.png" width={448} height={80} alt="logo" quality={100} />
        </div>

    </div>


    <FooterComponent />

</>)
}
