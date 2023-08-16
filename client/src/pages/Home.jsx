import { constants } from "../global-components/constants";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllAds } from "../slice/ads/adSlice";
import { selectAllApparels } from "../slice/apparels/apparelSlice";
import { selectAllCarousels } from "../slice/carousel/carouselSlice";
import { selectAllUsers } from "../slice/users/userSlice";
import { selectAllBrands } from "../slice/brand/brandSlice";
import Carousel from "../components/Carousel";
import ProductDisplay from "../components/ProductDisplay";
import Categories from "../components/Categories";




// import '@coreui/coreui/dist/css/coreui.min.css'

export default function Home() {

  const apparels = useSelector(selectAllApparels)

  const ads = useSelector(selectAllAds)

  const carousels = useSelector(selectAllCarousels)

  const users = useSelector(selectAllUsers)

  const brands = useSelector(selectAllBrands)
  // const loggedIn = useSelector(selectLoggedInUser)

  const [adsUrl, setAdsUrl] = useState({})

// console.log('loggedIn', loggedIn)

// console.log('JSON.parse(localStorage.getItem', JSON.parse(localStorage.getItem('user')))

console.log('users', users)

// if (users !== {} && users !== undefined && users !== null) {
//   localStorage.removeItem('user')
//   console.log('localstorage user removed')
// }


// useEffect(() => {
//   if (userStatus === 'idle') {
//     // Fetch users' data only if it is not already present
//     dispatch(fetchUsers(loggedIn.jwt));
//   }
// }, [dispatch, userStatus]);

// console.log('user', users)

  useEffect(() => {
    setAdsUrl({
      adsUrl1: constants.url + ads[0]?.attributes.adsimg.data.attributes.url,
      adsHeading1: ads[0]?.attributes.heading,
      adsTrigger1: ads[0]?.attributes.trigger,
      adsNumber1: ads[0]?.attributes.carouselid,
      adsUrl2: constants.url + ads[1]?.attributes.adsimg.data.attributes.url,
      adsHeading2: ads[1]?.attributes.heading,
      adsTrigger2: ads[1]?.attributes.trigger,
      adsNumber2: ads[1]?.attributes.carouselid,
      adsUrl3: constants.url + ads[2]?.attributes.adsimg.data.attributes.url,
      adsHeading3: ads[2]?.attributes.heading,
      adsTrigger3: ads[2]?.attributes.trigger,
      adsNumber3: ads[2]?.attributes.carouselid,
      adsUrl4: constants.url + ads[0]?.attributes.adsimg.data.attributes.url,
      adsHeading4: ads[0]?.attributes.heading,
      adsTrigger4: ads[0]?.attributes.trigger,
      adsNumber4: ads[0]?.attributes.carouselid,
    })
  }, [ads]);

  // console.log('adsUrl.adsHeading', adsUrl.adsHeading)

  return (
    <>
      <div className="w-full h-[100vh] flex flex-row overflow-hidden">
        <Carousel carousels={carousels} />
      </div>
      <div className="">
        
        {/* <ProductDisplay adsUrl={adsUrl} /> */}
        
        <Categories data={apparels} carousels={carousels} headerTitle="Latest Arrivals" contentType="apparel" headerType="view"  color="#ffffff"/>
        <Categories data={apparels} carousels={carousels} headerTitle="" contentType="carousel" headerType="" color="#FFF7E9"/>
        <Categories data={apparels} carousels={carousels} headerTitle="Flash Sales" contentType="apparel" headerType="timeline"  color="#ffffff"/>
        <Categories data={apparels} carousels={carousels} headerTitle="" contentType="featured" headerType=""  color=""/>
        <Categories data={apparels} carousels={carousels} headerTitle="Top Brands" contentType="brand" headerType="view" color="#ffffff"/>
        <Categories data={apparels} carousels={carousels} headerTitle="Featured Collections" contentType="collection" headerType="view" color="#ffffff"/>



        {/* <div className="w-full grid grid-cols-4 gap-2 p-[50px] bg-[#FFF7E9]">
        {apparels.map((apparel) => (
          <ProductCard key={apparel.id} apparel={apparel} />
        ))}
      </div> */}

      </div>


    </>
  )
}
