import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogDetailsArea from "./BlogDetailsArea"
import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"

const BlogDetails = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="News Details" title="News Details" />
                    <BlogDetailsArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default BlogDetails
