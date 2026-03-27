'use client';
import AboutMeSlide from './components/aboutMe';
import BlockSlide from './components/aboutBlock';
import styles from './styles/about.module.css';
import profile from '../../../public/photoCV.jpg';
import unifei from '../../../public/Logo UNIFEI.png';
import utc from '../../../public/Logo UTC.svg';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { useLang } from '../context/langContext';
import content from './data/aboutContent.json';

export default function About() {
  const { lang } = useLang();

  const clients = [
    {
      name: "Speed Capital",
      bg: "linear-gradient(135deg, #03377B 0%, #416BB3 100%)",
      logo: "/Speed-Capital.webp",
    },
    {
      name: "Serra do Amolar",
      bg: "linear-gradient(135deg, #034a70 0%, #42789e 50%, #78bde3 100%)",
      logo: "/Serra-do-Amolar.png",
      link: "https://serradoamolar.com.br/"
    },
    {
      name: "Montax Inteligência",
      bg: "#ff811a",
      logo: "/Montax.webp",
      link: "https://montaxbrasil.com.br/"
    },
    {
      name: "Komex Trading",
      bg: "linear-gradient(135deg, #a7f3d0 0%, #17b9b0 45%, #60a5fa 100%)",
      logo: "/komex-trading.webp",
      link: "https://komex.com.br/"
    }
  ];

  const aboutMe = content.aboutMe[lang];
  const freelancer = content.freelancer[lang];

  return (
    <main className={styles.container}>

      {/* Slide 1: About Me */}
      <AboutMeSlide
        title={aboutMe.title}
        text={aboutMe.text}
        image={profile.src}
        imageClass={styles.aboutMe}
      >
        <div className={styles.socialIcons}>
          <a href="mailto:vivianleitef@gmail.com"><FaEnvelope /></a>
          <a href="tel:+33767897446"><FaPhone /></a>
          <a href="https://www.linkedin.com/in/vivian-fragoso-71101321a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </AboutMeSlide>

      {/* Slide 2: Academic Background */}
      <BlockSlide
        title={content.academic[lang].title}
        blocks={content.blocks.academic[lang].map((b: any, i: number) => ({
          ...b,
          image: i === 0 ? utc.src : unifei.src,
          imageRight: true
        }))}
      />

      <div className={styles.sectionDivider} />

      {/* Slide 3: Professional Experience */}
      <BlockSlide
        title={content.experience[lang].title}
        blocks={content.blocks.experience[lang]}
      />

      {/* Slide 4: Freelancer */}
      <section className={styles.freelancerSlide}>

        <div className={styles.freelancerText}>
          <span className={styles.freelancerTag}>{freelancer.tag}</span>

          <div className={styles.titleWrapper}>
            <h2 dangerouslySetInnerHTML={{ __html: freelancer.title }} />
          </div>

          <p dangerouslySetInnerHTML={{ __html: freelancer.text1 }} />
          <p dangerouslySetInnerHTML={{ __html: freelancer.text2 }} />
        </div>

        <div className={styles.freelancerCards}>
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link || "#"}
              target="_blank"
              rel="noreferrer"
              className={styles.clientCard}
            >
              <div
                className={styles.clientBackground}
                style={{
                  background:
                    client.bg.startsWith("linear-gradient") ||
                    client.bg.startsWith("radial-gradient") ||
                    client.bg.startsWith("#") ||
                    client.bg.startsWith("rgb")
                      ? client.bg
                      : `url(${client.bg}) center/cover no-repeat`
                }}
              />
              <div className={styles.clientContent}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className={styles.clientLogo}
                />
              </div>
            </a>
          ))}
        </div>

      </section>

    </main>
  );
}