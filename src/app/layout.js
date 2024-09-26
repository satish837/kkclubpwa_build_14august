// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
 
import localFont from 'next/font/local';
const lneue = localFont({ weight: 'normal', variable: '--font-lneue', src: '../../public/assets/fonts/LarishNeueSemiboldRegular.woff2' });
const arialmt = localFont({ weight: 'normal', variable: '--font-arialmt', src: '../../public/assets/fonts/arialmt.woff2' });
import Script from "next/script";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Starfield from 'react-starfield';
import { GoogleAnalytics } from '@next/third-parties/google';
import PwaModal from '@/components/shared/PwaModal';
import PwaIOS from '@/components/shared/PwaIOS';
import { AppContext, AuthProvider } from '@/context/AppProvider';
 
export const metadata = {
  title: "Kerakoll Club",
  description: "Kerakoll is the international leader in sustainable building",
  manifest:'/manifest.json',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/images/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/images/icons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/images/icons/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <meta name="background_color" content="#141414"/>
      <meta name="theme-color" content="#000000"/>
      <GoogleAnalytics gaId="G-LZYCLF5X2M" />
       {/* Facebook Pixel Code */}
       <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1077284977166574');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
        />
      </noscript>
      
      <meta name="google-site-verification" content="r6ZkF2xnlsOl1kVXDNkgMST9upMHFeLAz1Y0WQQDVHk" />

      <body className={`${lneue.variable} ${arialmt.variable}`}>
      

        <main className="main">
            <AuthProvider>
              {children}
              <PwaModal />
              <PwaIOS />
              <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"  />
              <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} />
            </AuthProvider>
        </main>
      </body>
    </html>
  );
}

