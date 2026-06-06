import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BlogTwoArea from "./BlogTwoArea"

const BlogTwo = () => {
    return (
        <>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Breadcrumb sub_title="News & Insights" title="News & Insights" />
                    <BlogTwoArea />
                    <FooterOne />
                </div>
            </div>
        </>
    )
}

export default BlogTwo
