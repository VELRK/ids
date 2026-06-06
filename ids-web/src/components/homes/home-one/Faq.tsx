"use client"
import TitleShape from '@/components/common/TitleShape'
import faq_data from '@/data/FaqData';
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

const FaqArea = ({ style }: StyleType) => {

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
        <section className={`faq-section fix section-padding ${style ? "pb-0" : ""}`}>
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="sub-title" style={{ color: '#000' }}>
                        <TitleShape />
                        Frequently Asked Questions
                    </span>
                    <h2 style={{ color: '#000' }}>
                        App Development & <br />
                        Digital Marketing FAQs.
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-8">
                        <div className="faq-items shadow-sm p-4 rounded bg-white">
                            <div className="accordion" id="accordionExample">
                                {faqData.map((item) => (
                                    <div key={item.id} className="accordion-item border-0 mb-3 wow fadeInUp" data-wow-delay={item.data_delay}>
                                        <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                                            <button className={`accordion-button shadow-none ${item.showAnswer ? "bg-ls text-black" : "collapsed text-dark"} fw-semibold`} type="button" data-bs-toggle="collapse"
                                                data-bs-target={`#collapseOne-${item.id}`} aria-expanded="false" aria-controls={`collapseOne-${item.id}`} style={{ color: item.showAnswer ? '#000' : 'inherit' }}>
                                                <span className="me-2 text-primary">{item.id}.</span> {item.title}
                                                <span className="plus-icon ms-auto"></span>
                                            </button>
                                        </h2>
                                        <div id={`collapseOne-${item.id}`} className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`}>
                                            <div className="accordion-body bg-light text-muted pt-2 pb-4 px-4 rounded-bottom">
                                                <p className="mb-0">
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
        </section>
    )
}

export default FaqArea
