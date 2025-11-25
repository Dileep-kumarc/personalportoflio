import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold">dileep<span className="text-primary">.</span></h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://github.com/Dileep-kumarc" target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/dileep-kumar-c-3a5278268/" target="_blank" className="p-2 rounded-full hover:bg-accent transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:dileepkmrc@gmail.com" className="p-2 rounded-full hover:bg-accent transition-colors">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Dileep Kumar C. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
