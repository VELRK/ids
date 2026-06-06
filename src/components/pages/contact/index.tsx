import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ContactInfo from "./ContactInfo"
import ContactArea from "./ContactArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Contact = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Contact us" title="Contact us" />
                    <ContactInfo />
                    <ContactArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default Contact
