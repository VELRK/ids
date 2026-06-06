import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TermsConditionsContent from "./TermsConditionsContent"

const TermsConditions = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Terms & Conditions" title="Terms & Conditions" />
                    <TermsConditionsContent />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default TermsConditions
