import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamArea from "./TeamArea"

const Team = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Our team" title="Our team" />
                    <TeamArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default Team
