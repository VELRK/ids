import HeaderOne from "@/layouts/headers/HeaderOne"
import Hero from "./Hero"
import Brand from "./Brand"
import About from "./About"
import Service from "./Service"
import Project from "./Project"
import Counter from "./Counter"
import Testimonial from "./Testimonial"
import Team from "./Team"
import FaqArea from "./Faq"
import MarqueeArea from "./MarqueeArea"
import FooterOne from "@/layouts/footers/FooterOne"
import OurProjects from "./OurProjects"
import Blog from "../home-three/Blog"

const HomeOne = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Hero />
                    <Brand />
                    <About />
                    <Service />
                    <Project />
                    <Counter />
                    <OurProjects />

                    {/* <Team /> */}
                    <MarqueeArea />
                    <Testimonial />

                    {/* <Blog /> */}
                    <FaqArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default HomeOne
