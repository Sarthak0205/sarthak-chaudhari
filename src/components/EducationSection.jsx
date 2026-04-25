'use client'

import React from "react";
import { motion as Motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import {
    colors,
    getSurfaceStyles,
    layout,
    sectionHeaderStyles,
    spacing,
} from "../ui/theme";

export default function EducationSection() {
    const data = [
        {
            title: "VIT, Vadala",
            subtitle: "B.E. Computer Engineering · Current",
            value: "9.58 SGPI",
        },
        {
            title: "Mahatma School of Academics & Sports & Junior College",
            subtitle: "Higher Secondary Education",
            value: "81.67%",
        },
        {
            title: "Mahatma School of Academics & Sports",
            subtitle: "Secondary Education",
            value: "94.20%",
        },
    ];

    return (
        <section
            style={{
                position: "relative",
                padding: `${spacing.sectionTight} ${spacing.shell} ${spacing.section}`,
                overflow: "hidden",
                background:
                    "radial-gradient(circle at 50% 20%, rgba(255,42,42,0.06), transparent 60%)",
            }}
        >
            {/* BACKGROUND TEXT */}
            <h1
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "clamp(60px, 10vw, 120px)",
                    fontWeight: 900,
                    opacity: 0.02,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                }}
            >
                EDUCATION
            </h1>

            <div
                style={{
                    maxWidth: layout.narrowWidth,
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* TITLE */}
                <Reveal>
                    <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2.1rem" }}>
                        <p style={sectionHeaderStyles.eyebrow}>Education</p>
                        <h2
                            style={{
                                ...sectionHeaderStyles.title,
                                marginTop: "0.82rem",
                            }}
                        >
                            Education
                        </h2>
                    </div>
                </Reveal>

                {/* TIMELINE */}
                <div
                    style={{
                        position: "relative",
                        paddingLeft: "30px",
                    }}
                >
                    {/* VERTICAL LINE */}
                    <div
                        style={{
                            position: "absolute",
                            left: "10px",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            background: "rgba(255,42,42,0.16)",
                        }}
                    />

                    {/* ITEMS */}
                    {data.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <Motion.div
                                whileHover={{ x: 4 }}
                                style={{
                                    position: "relative",
                                    marginBottom: "30px",
                                }}
                            >
                                {/* DOT */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-1px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "14px",
                                        height: "14px",
                                        borderRadius: "50%",
                                        background: "#ff2a2a",
                                        boxShadow: "0 0 8px rgba(255,42,42,0.34)",
                                    }}
                                />

                                {/* CARD */}
                                <div
                                    style={{
                                        marginLeft: "20px",
                                        ...getSurfaceStyles("accent"),
                                        padding: "20px 22px",
                                        backdropFilter: "blur(10px)",
                                    }}
                                >
                                    <h3 style={{ fontSize: "1rem", lineHeight: 1.4, margin: 0 }}>
                                        {item.title}
                                    </h3>

                                    <p style={{ color: colors.textSoft, fontSize: "0.85rem", margin: "0.35rem 0 0" }}>
                                        {item.subtitle}
                                    </p>

                                    <p
                                        style={{
                                            margin: "0.65rem 0 0",
                                            color: colors.textMuted,
                                            fontWeight: 500,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </Motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
