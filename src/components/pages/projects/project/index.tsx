import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ProjectArea from "./ProjectArea"

const Project = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Our Portfolio" title="Our Portfolio" />
                    <ProjectArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default Project
