import WhatOur from "./common/WhatOur";
import MapView from "./contact-us/mapview/MapView";
import NewsLetter from "./homecontent/NewsLetter";

import HomeBanner from "./pageslider/HomeBanner";
import HomeImage from "./pageslider/HomeImage";




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
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Map App</h1>
        <MapView />
        
      </main>
    </>
  );
}
