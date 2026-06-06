import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import OurProjectsArea from "./OurProjectsArea"

const OurProjects = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Our Projects" title="Our Projects" />
                    <OurProjectsArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default OurProjects
