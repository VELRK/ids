import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from "./ServiceDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"
import { Suspense } from "react"

const ServiceDetails = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Service details" title="Service details" />
                    <Suspense fallback={<div>Loading...</div>}>
                        <ServiceDetailsArea />
                    </Suspense>
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default ServiceDetails
