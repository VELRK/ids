"use client"
import { useState } from 'react';

interface FaqItem {
    id: number;
    title: string;
    desc: string;
    data_delay: string;
}

interface FaqProps {
    faqs: FaqItem[];
}

const Faq = ({ faqs }: FaqProps) => {
    const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

    const currentActiveId = activeFaqId !== null ? activeFaqId : (faqs && faqs.length > 0 ? faqs[0].id : null);

    const toggleAnswer = (faqId: number) => {
        setActiveFaqId(prev => prev === faqId ? -1 : faqId);
    };

    if (!faqs) return null;

    return (
        <div className="accordion" id="accordionExample">
            {faqs.map((item) => {
                const showAnswer = item.id === currentActiveId;
                return (
                    <div key={item.id} className="accordion-item wow fadeInUp" data-wow-delay={item.data_delay}>
                        <h2 className="accordion-header" onClick={() => toggleAnswer(item.id)}>
                            <button className={`accordion-button ${showAnswer ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse"
                                data-bs-target={`#collapseOne-${item.id}`} aria-expanded="false" aria-controls={`collapseOne-${item.id}`}>
                                0{item.id}. {item.title}
                                <span className="plus-icon"></span>
                            </button>
                        </h2>
                        <div id={`collapseOne-${item.id}`} className={`accordion-collapse collapse ${showAnswer ? "show" : ""}`}>
                            <div className="accordion-body">
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Faq
