import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamDetailsArea from "./TeamDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Team Details" title="Team Details" />
                    <TeamDetailsArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default TeamDetails
