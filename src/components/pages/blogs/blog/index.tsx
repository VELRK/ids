import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Blog = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="Blog Grid" title="Blog Grid" />
                    <BlogArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default Blog
