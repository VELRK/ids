"use client"
import TitleShape from '@/components/common/TitleShape'
import faq_data from '@/data/FaqData';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface DataType {
    id: number;
    page: string
    title: string;
    desc: string;
    showAnswer: boolean;
    data_delay: string;
}

interface StyleType {
    style?: boolean;
}

const Faq = ({ style }: StyleType) => {

    const [faqData, setFaqData] = useState<DataType[]>([]);

    useEffect(() => {
        const filtered = faq_data.filter(item => item.page === "home_1");
        const updatedData = filtered.map((item, index) => ({
            ...item,
            showAnswer: index === 0
        }));
        setFaqData(updatedData);
    }, []);

    const toggleAnswer = (faqId: number) => {
        setFaqData((prevFaqData) =>
            prevFaqData.map((faq) => ({
                ...faq,
                showAnswer: faq.id === faqId
            }))
        );
    };

    return (
        <section className={`faq-section fix ${style ? "section-padding" : ""}`}>
            <div className="container">
                <div className="faq-wrapper-3">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="faq-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title wow fadeInUp">
                                        <TitleShape />
                                        Our Faq
                                    </span>
                                    <h2 className="text-anim">
                                        FAQ
                                    </h2>
                                </div>
                                <p className="text wow fadeInUp" data-wow-delay=".3s">
                                    We are a results-driven IT consulting team helping businesses unlock efficiency.
                                </p>
                                <Link href="/contact" className="link-btn wow fadeInUp" data-wow-delay=".5s">
                                    Contact us
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="faq-items-3">
                                <div className="accordion" id="accordionExample">
                                    {faqData.map((item) => (
                                        <div key={item.id} className="accordion-item wow fadeInUp" data-wow-delay={item.data_delay}>
                                            <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                                                <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse"
                                                    data-bs-target={`#collapseOne-${item.id}`} aria-expanded="false" aria-controls={`collapseOne-${item.id}`}>
                                                    {item.id}{item.title}
                                                    <span className="plus-icon"></span>
                                                </button>
                                            </h2>
                                            <div id={`collapseOne-${item.id}`} className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                                                <div className="accordion-body">
                                                    <p>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
