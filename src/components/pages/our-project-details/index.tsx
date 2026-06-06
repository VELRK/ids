import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import OurProjectDetailsArea from "@/components/pages/our-project-details/OurProjectDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"
import { Suspense } from "react"

// Full-page skeleton that mimics the actual layout without a footer block
const ProjectDetailsSkeleton = () => (
    <>
        <style>{`
            @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
            }
            .sk {
                background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
                background-size: 1000px 100%;
                animation: shimmer 1.6s infinite linear;
                border-radius: 8px;
            }
        `}</style>

        {/* Breadcrumb skeleton */}
        <div style={{ background: "#f8fafc", padding: "60px 0" }}>
            <div className="container text-center">
                <div className="sk mx-auto mb-3" style={{ height: 16, width: 200 }} />
                <div className="sk mx-auto" style={{ height: 40, width: 300 }} />
            </div>
        </div>

        {/* Main content skeleton */}
        <div className="container" style={{ padding: "80px 15px", minHeight: "80vh" }}>
            <div className="row g-4 align-items-center">
                {/* Left: image */}
                <div className="col-lg-6">
                    <div className="sk" style={{ height: 380, borderRadius: 16 }} />
                </div>
                {/* Right: text */}
                <div className="col-lg-6">
                    <div className="sk mb-3" style={{ height: 32, width: "40%" }} />
                    <div className="sk mb-3" style={{ height: 52, width: "85%" }} />
                    <div className="sk mb-2" style={{ height: 18, width: "100%" }} />
                    <div className="sk mb-2" style={{ height: 18, width: "90%" }} />
                    <div className="sk mb-4" style={{ height: 18, width: "75%" }} />
                    <div className="d-flex gap-2 mb-4">
                        <div className="sk" style={{ height: 36, width: 100, borderRadius: 50 }} />
                        <div className="sk" style={{ height: 36, width: 120, borderRadius: 50 }} />
                    </div>
                </div>
            </div>

            {/* Methodology cards */}
            <div className="row g-4 mt-5">
                <div className="col-lg-8">
                    <div className="sk mb-4" style={{ height: 32, width: 280 }} />
                    <div className="row g-3">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="col-md-6">
                                <div className="sk" style={{ height: 100, borderRadius: 20 }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar skeleton */}
                <div className="col-lg-4">
                    <div className="sk mb-3" style={{ height: 360, borderRadius: 24 }} />
                </div>
            </div>
        </div>
    </>
)

const OurProjectDetails = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Suspense fallback={<ProjectDetailsSkeleton />}>
                        <Breadcrumb sub_title="Project Details" title="Project Details" />
                        <OurProjectDetailsArea />
                        <FooterOne />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default OurProjectDetails