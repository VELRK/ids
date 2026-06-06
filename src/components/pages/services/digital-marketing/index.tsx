import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import DigitalMarketingIntro from "./DigitalMarketingIntro"
import DigitalMarketingArea from "./DigitalMarketingArea"
import ContactForm from "@/components/homes/home-three/ContactForm"
import BrandCommon from "@/components/common/BrandCommon"

const DigitalMarketing = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="services" title="Digital Marketing" />
                    <DigitalMarketingIntro />
                    <DigitalMarketingArea />
                    <ContactForm />
                    <div className="brand-section section-padding fix mt-0 mb-0">
                        <BrandCommon />
                    </div>
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default DigitalMarketing
