"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../ui/badge"

const experience = [
    {
        title: "Java Full Stack Intern",
        company: "TAP Academy",
        period: "Jul 2025 – Present",
        description: "Worked on full-stack projects using Java, Spring, and MySQL in agile teams. Developed RESTful APIs and implemented frontend interfaces.",
        type: "work"
    },
    {
        title: "Web Development Intern",
        company: "Onsite",
        period: "Jan 2024 – Jun 2024",
        description: "Developed responsive websites using HTML, CSS, and JavaScript. Collaborated with design teams to implement user-friendly interfaces.",
        type: "work"
    },
    {
        title: "AICTE Ideal Lab Internship",
        company: "AICTE",
        period: "Oct 2022 – Nov 2022",
        description: "Hands-on work with 3D printing, laser cutting, and PCB manufacturing. Gained practical experience in hardware prototyping.",
        type: "work"
    }
]

const education = [
    {
        degree: "Bachelor of Engineering",
        field: "Information Science & Engineering",
        school: "Malnad College of Engineering, Hassan",
        period: "2021 - 2025",
        grade: "CGPA: 7.0/10",
        type: "edu"
    },
    {
        degree: "Pre-University Course",
        field: "PCMB",
        school: "M. Krishna PU College, Hassan",
        period: "2019 - 2021",
        grade: "80% Aggregate",
        type: "edu"
    },
    {
        degree: "SSLC",
        field: "State Board",
        school: "Swarna High School",
        period: "2018 - 2019",
        grade: "85% Aggregate",
        type: "edu"
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-3"
                        >
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold">Internships</h2>
                        </motion.div>

                        <div className="space-y-8 relative border-l-2 border-muted ml-6 pl-8">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                                    <Card className="border-none shadow-none bg-transparent">
                                        <CardHeader className="p-0 pb-2">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <Badge variant="outline" className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" /> {item.period}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl">{item.title}</CardTitle>
                                            <div className="text-primary font-medium">{item.company}</div>
                                        </CardHeader>
                                        <CardContent className="p-0 text-muted-foreground">
                                            {item.description}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div id="education">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-3"
                        >
                            <div className="p-3 bg-primary/10 rounded-full">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold">Education</h2>
                        </motion.div>

                        <div className="space-y-8 relative border-l-2 border-muted ml-6 pl-8">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                                    <Card className="border-none shadow-none bg-transparent">
                                        <CardHeader className="p-0 pb-2">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <Badge variant="outline" className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" /> {item.period}
                                                </Badge>
                                                <Badge variant="secondary">{item.grade}</Badge>
                                            </div>
                                            <CardTitle className="text-xl">{item.degree}</CardTitle>
                                            <div className="text-primary font-medium">{item.school}</div>
                                        </CardHeader>
                                        <CardContent className="p-0 text-muted-foreground">
                                            {item.field}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
