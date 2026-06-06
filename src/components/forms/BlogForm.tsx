
const BlogForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} id="contact-form" method="POST">
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="form-clt">
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-clt">
                        <input type="email" name="email" id="email2" placeholder="Your Email" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-clt">
                        <textarea name="message" id="message" placeholder="Write Message"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <button type="submit" className="theme-btn">
                        post comment <i className="fa-solid fa-arrow-up-right"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BlogForm
