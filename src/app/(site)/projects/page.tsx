import React from "react";
import type { Metadata } from "next";
import { Projects } from "@/components";

export const metadata: Metadata = {
    title: "Selected Projects",
};

export default function ProjectsPage() {
    return (
        <main>
            <Projects />
        </main>
    );
}
