"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const projects = [
    {
        num: "01",
        title: "Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
        href: ""
    },
    {
        num: "02",
        title: "TODO hahaha",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
        href: ""
    },
    {
        num: "03",
        title: "TODO hahaha",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
        href: ""
    }
];

import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {projects.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold">{project.num}</div>
                                    <Link href={project.href}>
                                        <BsArrowDownRight />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2>{project.title}</h2>
                                {/* description */}
                                <p>{project.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;