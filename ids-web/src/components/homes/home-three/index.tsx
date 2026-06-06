import Hero from "./Hero"
import Service from "./Service"
import About from "./About"
import Feature from "./Feature"
import Pricing from "./Pricing"
import Testimonial from "./Testimonial"
import Faq from "./Faq"
import Blog from "./Blog"
import ContactForm from "./ContactForm"
import FooterThree from "@/layouts/footers/FooterThree"
import MarqueeArea from "./MarqueeArea"
import HeaderThree from "@/layouts/headers/HeaderThree"

const HomeThree = () => {
    return (
        <>
            <HeaderThree />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Hero />
                    <Service />
                    <MarqueeArea />
                    <About />
                    <Feature />
                    <Pricing />
                    <Testimonial />
                    <Faq />
                    <Blog />
                    <ContactForm />
                    <FooterThree />
                </div>
            </div>
        </>
    )
}

export default HomeThree
