import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ProjectDetailsArea from "./ProjectDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"
import { Suspense } from "react"

const ProjectDetails = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Portfolio details" title="Portfolio details" />
                    <Suspense fallback={
                        <div className="container py-5 text-center" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <h5 style={{ color: "var(--theme)", fontWeight: 700 }}>Loading Portfolio Details...</h5>
                            </div>
                        </div>
                    }>
                        <ProjectDetailsArea />
                    </Suspense>
                    <FooterOne />
                </div>
            </div>
        </>
    )
}


export default ProjectDetails
