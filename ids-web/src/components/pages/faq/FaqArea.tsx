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

const FaqArea = () => {

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
        <section className="faq-section fix section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="faq-items mt-0">
                            <div className="accordion" id="accordionExample">
                                {faqData.map((item) => (
                                    <div key={item.id} className="accordion-item wow fadeInUp" data-wow-delay={item.data_delay}>
                                        <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                                            <button className={`accordion-button shadow-none text-dark ${item.showAnswer ? "bg-light" : "collapsed"} fw-semibold`} type="button" data-bs-toggle="collapse"
                                                data-bs-target={`#collapseOne-${item.id}`} aria-expanded="false" aria-controls={`collapseOne-${item.id}`} style={{ color: '#000' }}>
                                                <span className="me-2 text-primary">{item.id}.</span> {item.title}
                                                <span className="plus-icon ms-auto"></span>
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
        </section>
    )
}

export default FaqArea
