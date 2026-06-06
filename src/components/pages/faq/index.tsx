import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import FaqArea from "./FaqArea"

const Faq = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Faq Page" title="Faq Page" />
                    <FaqArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default Faq
