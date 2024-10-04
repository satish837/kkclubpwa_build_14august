"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from "../shared/LoaderComponent";
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';
import TotalrewardpointsComponent from '../shared/TotalrewardpointsComponent';
import { _get } from "@/config/apiClient";
import HeaderDashboard from '../shared/HeaderDashboard';
import FooterComponent from '../shared/FooterComponent';
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function EarnedComponent() {
    const [pagemsg, setPagemsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(true);
    const [pointnumber, setPointnumber] = useState(0);
    const rewardspoints = TotalrewardpointsComponent();
    const { push } = useRouter();
    const params = useParams()
    
 

    useEffect(() => {
      console.log(pointnumber);

      const messageDiv = document.getElementById('message');
      
      if (pointnumber == 1000) {
        messageDiv.innerHTML = "<h6>Diwali Bonanza Gold Se Growth!</h6><h2>Congratulations</h2><h3>you’ve won <span>₹1000</span> in Gold Se Growth! </h3><h4>Keep scanning for more prizes! </h4>";
        
      } 
      else if (pointnumber == 10) {
        messageDiv.innerHTML = "<h6>Diwali Bonanza Gold Se Growth!</h6><h2>Congratulations</h2><h3>you have won <span>₹5,000</span> worth of Gold Voucher,</h3><h4>a token amount of 11 is credited to your Wallet</h4><h5>Our sales Team will contact you for the delivery of the Gold Voucher.</h5>";
        alert("hi");
      }
      else if (pointnumber == 21) {
        messageDiv.innerHTML = "<h6>Diwali Bonanza Gold Se Growth!</h6><h2>Congratulations</h2><h3>you have won <span>₹10,000</span> worth of Gold Voucher,</h3><h4> a token amount of 21 is credited to your Wallet</h4><h5>Our sales Team will contact you for the delivery of the Gold Voucher.</h5>";
        
      }
      else if (pointnumber == 51) {
        messageDiv.innerHTML = "<h6>Diwali Bonanza Gold Se Growth!</h6><h2>Congratulations</h2><h3> you have won <span>₹50,000</span> worth of Gold Voucher,</h3><h4>a token amount of 51 is credited to your Wallet</h4><h5>Our sales Team will contact you for the delivery of the Gold Voucher.</h5>";
      }
      else if (pointnumber == 101) {
        messageDiv.innerHTML = "<h6>Diwali Bonanza Gold Se Growth!</h6><h2>Congratulations</h2><h3> you have won <span>₹1,00,000</span> worth of Gold Voucher, </h3><h4>a token amount of 101 is credited to your Wallet</h4><h5>Our sales Team will contact you for the delivery of the Gold Voucher.</h5>";
      }
    }, [pointnumber])
    
   
    useEffect(() => {
        setLoading(true);
        setPagemsg('Validating Coupon');
        _get("Customer/RewardPointInfo?pointid="+params.pointid)
        .then((res) => {
          setLoading(false);
          //  console.log(" response - ", res);
            if(mounted)
            {
              setPointnumber(res.data.result[0].earnedpoints);
            }
        }).catch((error) => {
            setLoading(false);
            console.log("RewardPointInfo-", error);
        });
        return () => { setMounted(false); }
    }, []);

  return (<div className='outsidescreen'>
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
      <div className="screenmain screenqrcode" > 
        <div className="screencontainer">

            <div className="earnepoints_content"  id='message'>
                <h2>Congratulations</h2>
                <h3>You have earned</h3>
                <h4><CountUp duration={2} start={0}  delay={1}  end={pointnumber} /></h4>
                <h5>points </h5>

                <Image className="earnpoint_img1" src="/assets/images/v1.png"  width={64} height={64} alt="scanQR" quality={99}  />
                <Image className="earnpoint_img2" src="/assets/images/V2.png"  width={123} height={123} alt="scanQR" quality={99}  />
                <Image className="earnpoint_img3" src="/assets/images/v3.png"  width={64} height={64} alt="scanQR" quality={99}  />
                <Image className="earnpoint_img4" src="/assets/images/v4.png"  width={69} height={76} alt="scanQR" quality={99}  />
            </div>

        </div>

        <div className="earnepoints_scan">
                <aside  onClick={()=> push("/scanqrcode")}> 
                  <Image src="/assets/images/scanQR.png"  width={139} height={138} alt="scanQR" quality={99}  />
                </aside>
                <p>Scan more points</p>
        </div>  


        <div className="screenqrbottom">
            <h2>
              <em>CLUB WALLET</em>
              <CountUp duration={2} start={0}  delay={1}  end={rewardspoints} /> <span>Points</span>
            </h2>
            <p><Link href='/rewards'>check your club wallet</Link></p>
        </div>
        
      </div> 

      <FooterComponent />


      
      <Loader showStatus={loading}  message={pagemsg} />
      
    </div>)
}
