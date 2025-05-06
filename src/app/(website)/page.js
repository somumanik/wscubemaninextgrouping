// "use client"
import WhatOur from "./common/WhatOur";

import NewsLetter from "./homecontent/NewsLetter";
import BannerTrading from "./pageslider/BannerTrading";
import HomeBanner from "./pageslider/HomeBanner";
import HomeImage from "./pageslider/HomeImage";
import HomeSliderBestproducts from "./pageslider/HomeSliderBestproducts";
import HomeTabButton from "./pageslider/HomeTabButton";





// [git add netlify.toml
//   git commit -m "Add Netlify config for Next.js"
//   git push]



export default function Home() {

  return (
    <>
      <HomeBanner />
      <HomeImage />
      <HomeTabButton/>
      <BannerTrading/>
      <HomeSliderBestproducts/>
      <WhatOur />
      <NewsLetter />
     
    </>
  );
}
