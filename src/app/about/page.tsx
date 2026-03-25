'use client';
import React from 'react';
import AboutSlide from './components/aboutSlide';
import styles from './styles/about.module.css';
import profile from '../../../public/photoCV.jpg';
import unifei from '../../../public/Logo UNIFEI.png';
import utc from '../../../public/Logo UTC.svg';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function About() {
    return (
        <main className={styles.container}>
            {/* Slide 1: About Me */}
            <AboutSlide
                title="About Me"
                text={`Sou uma jovem curiosa e criativa, nascida em uma pequena cidade no litoral do Brasil rica pela sua beleza natural, mesmo com poucos recursos, aos 5 anos ganhei (do meu pai que é técnico em informática) o melhor presente que recebi até hoje, um computador de mesa e foi aí que descobri uma paixão: tecnologia. Hoje procuro uma oportunidade para continuar desenvolvendo minhas habilidades em um ambiente que me desafie e me permita fazer o que eu gosto <em>criar</em> soluções a partir da tecnologia para resolver problemas reais.`}
                image={profile.src}
                imageRight={true}
                imageClass={styles.aboutMe}
                >
                <div className={styles.socialIcons}>
                  <a href="mailto:seuemail@example.com"><FaEnvelope /></a>
                  <a href="tel:+551199999999"><FaPhone /></a>
                  <a href="https://www.linkedin.com/in/seulinkedin/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
              </AboutSlide>

            {/* Slide 2: Academic Background */}
            <AboutSlide
                title="Academic Background"
                subtitle="Testei diversas áreas antes da faculdade (eu já disse que sou curiosa?) mas foi na engenharia que encontrei meu lugar"
                blocks={[
                    {
                        name: "University of Technology of Compiègne",
                        degree: "Computer Engineering",
                        period: "Feb 2026 – Present",
                        topics: [
                            "Algorithmic complexity, Relational and non-relational databases, Data analysis, Combinatorial optimization"
                        ],
                        image: utc.src,
                        imageRight: true
                    },
                    {
                        name: "Federal University of Itajubá",
                        degree: "BSc in Computer Engineering",
                        period: "2021 – Present",
                        topics: [
                            "OOP, Software Design, Design Patterns, Databases, ORM, Networks, Project Management",
                            "OS, Embedded Systems, Microcontrollers, Electronics, Control Systems",
                            "Linear Algebra, Data Analysis, TinyML, AI"
                        ],
                        image: unifei.src,
                        imageRight: true
                    }
                ]}
            />

            {/* Slide 3: Professional Experience */}
            <AboutSlide
                title="Professional Experience"
                subtitle="Algumas experiências que marcaram meu percurso profissional"
                blocks={[
                    {
                        name: "SDR Force",
                        degree: "Infrastructure and Automation Developer",
                        period: "Jul 2022 – Feb 2026",
                        topics: [
                            "Reduced manual configuration latency by 62.5% through backend optimization.",
                            "Automated server routines and mass mailing infrastructure using WHM/cPanel.",
                            "Managed high-volume SMTP server operations and architected scalable technical documentation."
                        ]
                    },
                    {
                        name: "Federal University of Itajubá",
                        degree: "Student Researcher",
                        period: "Aug 2024 – Jul 2025",
                        topics: [
                            "Comparative study of JS and WebAssembly for AI deployment, achieving up to 4.5x faster performance than JS.",
                            "Profiling of latency and memory across diverse architectures to benchmark efficiency and portability."
                        ]
                    },
                    {
                        name: "DAC",
                        degree: "Full Stack Developer Intern",
                        period: "Jul 2022 – Jul 2024",
                        topics: [
                            "Developed web applications using PHP, HTML, CSS, JavaScript, and TypeScript.",
                            "Contributed to a platform that assists women in reporting domestic violence securely."
                        ]
                    }
                ]}

            />

        </main>
    );
}