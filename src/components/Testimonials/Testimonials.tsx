"use client";
import { useState } from "react";
import { SectionTitle, TestimonySlider } from "..";
import "./Testimonials.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { TestimonialData } from "@/constants/data";
import Image from "next/image";
import { BsCircle, BsStopCircle } from "react-icons/bs";

export default function Testimonials() {
    const [slideIndex, setSlideIndex] = useState(0);
    function showNext() {
        setSlideIndex((index) => {
            if (index === TestimonialData.length - 1) return 0;
            return index + 1;
        });
    }
    function showPrev() {
        setSlideIndex((index) => {
            if (index === 0) return TestimonialData.length - 1;
            return index - 1;
        });
    }
    return (
        <section className="testimonials">
            <div className="container">
                <SectionTitle
                    name="Testimonials"
                    title="What people say about me!"
                />
                <div className="testimonies">
                    <div
                        style={{
                            translate: `${-100 * slideIndex}%`,
                        }}
                        className="slide-container"
                    >
                        {TestimonialData.map((data) => (
                            <article className="slide" key={data.name}>
                                <div className="image">
                                    <Image
                                        src={data.photo}
                                        alt={data.name}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="info">
                                    <h4>{data.title}</h4>
                                    <h3>{data.name}</h3>
                                    <p className="port-text">{data.comment}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button
                        onClick={showPrev}
                        className="slider-btn"
                        style={{ left: 0 }}
                        aria-label="View Previous Testimoial"
                    >
                        <BiLeftArrow />
                    </button>
                    <button
                        onClick={showNext}
                        className="slider-btn"
                        style={{ right: 0 }}
                        aria-label="View Next Testimoial"
                    >
                        <BiRightArrow />
                    </button>
                    <div className="pagination">
                        {TestimonialData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSlideIndex(index)}
                                aria-label={`View ${index + 1} Testimony`}
                            >
                                {index === slideIndex ? (
                                    <BsStopCircle />
                                ) : (
                                    <BsCircle />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
