"use client"
const Newsletter = () => {
    return (
        <section className="newsletter-section-4">
            <div className="container">
                <div className="newsletter-box-4 scale-animation">
                    <h2 className="text-anim">
                        Join Our Community <br /> For Updates
                    </h2>
                    <div className="newsletter-content">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email address" />
                        </form>
                        <button type="submit" className="theme-btn">
                            Subscribe now <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
