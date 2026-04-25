import React from "react";
import Reveal from "../ui/Reveal";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { layout, sectionHeaderStyles, spacing } from "../ui/theme";

export default function CTASection() {
    const navigate = useNavigate();

    return (
        <section style={{ padding: `${spacing.sectionTight} ${spacing.shell} ${spacing.section}` }}>
            <Reveal>
                <div style={{ ...sectionHeaderStyles.wrap, textAlign: "center", marginBottom: "0.9rem" }}>
                    <p style={sectionHeaderStyles.eyebrow}>Next Step</p>
                    <h2 style={sectionHeaderStyles.title}>Get in touch</h2>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <p
                    style={{
                        ...sectionHeaderStyles.body,
                        maxWidth: layout.readingWidth,
                        textAlign: "center",
                    }}
                >
                    Feel free to reach out for opportunities or collaborations.
                </p>
            </Reveal>

            <Reveal delay={0.2}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
                    <Button onClick={() => navigate("/contact")}>
                    Email me
                    </Button>
                </div>
            </Reveal>
        </section>
    );
}
