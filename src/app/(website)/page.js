// "use client"
import WhatOur from "./common/WhatOur";
// import SimpleMap from "./contact-us/mapview/MapView";
import NewsLetter from "./homecontent/NewsLetter";
import HomeBanner from "./pageslider/HomeBanner";
import HomeImage from "./pageslider/HomeImage";
// import dynamic from 'next/dynamic';




// [git add netlify.toml
//   git commit -m "Add Netlify config for Next.js"
//   git push]



export default function Home() {

  return (
    <>
      <HomeBanner />
      <HomeImage />
      <WhatOur />
      <NewsLetter />
      {/* <main>
       
        <SimpleMap />
      </main> */}
    </>
  );
}
