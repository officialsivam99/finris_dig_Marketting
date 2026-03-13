import React from 'react';
import counterShape1 from '../../assets/images/shapes/counter-one-shape-1.png';

interface CounterItem {
    id: number;
    title: string;
    text: string;
}

const counterData: CounterItem[] = [
    { id: 1, title: 'Execution Excellence', text: 'Structured delivery with clear milestones and outcomes.' },
    { id: 2, title: 'Strategic Planning', text: 'Roadmaps designed around your business priorities.' },
    { id: 3, title: 'Quality-Driven Process', text: 'Consistent standards across every project stage.' },
    { id: 4, title: 'Long-Term Partnership', text: 'Collaborative support focused on sustainable growth.' },
];

const CounterTwo: React.FC = () => {
    return (
        <section className="counter-one">
            {/* Background Shape */}
            <div
                className="counter-one__shape-1 float-bob-x"
                style={{ backgroundImage: `url(${counterShape1})` }}
            ></div>

            <div className="container">
                <ul className="list-unstyled counter-one__list">
                    {counterData.map((counter: CounterItem) => (
                        <li
                            key={counter.id} 
                        >
                            <div className="counter-one__single">
                                <div className="counter-one__count count-box">
                                    <p
                                        className="count-text" 
                                    >
                                        {counter.title}
                                    </p>
                                </div>
                                <p className="counter-one__text">{counter.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CounterTwo;
