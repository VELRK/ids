import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import PricingArea from "./PricingArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Pricing = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Our Portfolio" title="Our Portfolio" />
                    <PricingArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default Pricing
