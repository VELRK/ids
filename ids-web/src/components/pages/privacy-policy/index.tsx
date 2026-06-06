import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import PrivacyPolicyContent from "./PrivacyPolicyContent"

const PrivacyPolicy = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Privacy Policy" title="Privacy Policy" />
                    <PrivacyPolicyContent />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
