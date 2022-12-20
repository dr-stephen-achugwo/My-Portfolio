import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedLetters from "./AnimatedLetters";
import styles from "../styles/MainPage.module.scss";


const MainPage = () => {
  const [letterClass, setLetterClass] = useState("text__animate");
  const nameArray = "Stephen Achugwo".split("");
  const jobArray = "Web Developer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 5000);
  }, []);
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__inner}>
        <div className={styles.text__zone}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            , <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>’</span>
            <span className={`${letterClass} _15`}>m</span>
            {"  "}
            <span className={styles.name}>Dr </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <span className={styles.name}>a </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            {/* <span>.</span> */}
          </h1>
          <h2>Frontend Developer / Visual Artist</h2>
          <p>
            app developer with a passion for programming and designing
            <br /><span>........ coding and building beautiful functional websites ........</span>
          </p>
          <div className={styles.links__ctn}>
            <Link href="/contact">
              <a className={styles.btn} title="get in touch with Dr Stephen Achugwo">Contact Me</a>
            </Link>
            <Link href="./assets/Achugwo-CV.pdf">
              <a className={styles.btn} title="view Resume of Dr Stephen Achugwo">Download Resume</a>
            </Link>
            {/* <a
              href="./assets/temmy-resume.pdf"
              target="_blank"
              className={styles.btn}
              download
              style={{ marginLeft: "1rem" }}
            >
              Download Resume
            </a> */}
          </div>
          <div className={styles.asban}>
            <Link href="https://art1app.com">
              <a className={styles.btn} title="visit Artistic Splendor Homepage">
              <Image src="/asban.png" width={192} height={64} alt="Artistic Splendor Banner" />
              </a>
            </Link>
          </div>
        </div>
        {/* <div className={styles.image__zone}>
          <Logo />
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;
