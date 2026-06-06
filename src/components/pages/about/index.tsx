import BrandCommon from "@/components/common/BrandCommon"
import Breadcrumb from "@/components/common/Breadcrumb"
import AboutOne from "@/components/homes/home-one/About"
import FaqArea from "@/components/homes/home-one/Faq"
import Team from "@/components/homes/home-one/Team"
import Testimonial from "@/components/homes/home-one/Testimonial"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const About = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="About us" title="About us" />
                    <AboutOne />
                    <Testimonial style={true} />
                    <FaqArea style={true} />
                    <div className="brand-section section-padding fix mt-0 mb-0">
                        <BrandCommon />
                    </div>
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default About
