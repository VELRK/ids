import HeaderFour from "@/layouts/headers/HeaderFour"
import Hero from "./Hero"
import MarqueeBg from "./MarqueeBg"
import Service from "./Service"
import BrandCommon from "@/components/common/BrandCommon"
import About from "./About"
import Pricing from "./Pricing"
import VideoArea from "./VideoArea"
import Testimonial from "./Testimonial"
import Project from "./Project"
import OurProjects from "../home-one/OurProjects"
import Faq from "../home-three/Faq"
import Newsletter from "./Newsletter"
import FooterFour from "@/layouts/footers/FooterFour"

const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MarqueeBg />
          <Service />
          <div className="brand-section-4">
            <BrandCommon />
          </div>
          <About />
          <Pricing />
          <VideoArea />
          <Testimonial />
          <Project />
          <Faq style={true} />
          <OurProjects />
          <Newsletter />
          <FooterFour />
        </div>
      </div>
    </>
  )
}

export default HomeFour
