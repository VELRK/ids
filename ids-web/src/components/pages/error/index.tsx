import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Error 404" title="Error 404" />
                    <ErrorArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default NotFound
