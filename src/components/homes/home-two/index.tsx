import HeaderOne from "@/layouts/headers/HeaderOne"
import Hero from "./Hero"
import Feature from "./Feature"
import About from "./About"
import Service from "./Service"
import Project from "./Project"
import VideoBg from "./VideoBg"
import Testimonial from "./Testimonial"
import Pricing from "./Pricing"
import Blog from "./Blog"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Hero />
                    <Feature />
                    <About />
                    <Service />
                    <Project />
                    <VideoBg />
                    <Testimonial />
                    <Pricing />
                    <Blog />
                    <FooterTwo />
                </div>
            </div>
        </>
    )
}

export default HomeTwo
