'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import Day from '../../../components/Day';

import { useInView } from 'react-intersection-observer';

const phrases = [
  "Bullterier",
  "Tattoo",
  "Shop",
]

const phrases2 = [
  "Szkolenia",
]

const heroParagraph = [
  "Najlepsze unikatowe tatuaże",
  "profesjonalne szkolenia i treningi",
  "w Bullterrier Tattooshop",
  "w samym sercu krakowskiego Kazimierza",
]

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
]

export default function Home() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
      <div className={styles.container}>
      {/* <Forward /> */}
      {/* <MaskText/> */}

<div className={styles.headerWrapper}>
  <h1>Szkolenia</h1>

</div>
<div className={styles.videoWrap}>
  <iframe src="https://giphy.com/embed/IPDpv0W2sQrKg" width="580" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
<div className={styles.trainingsContent}>
  <p>Chcesz zostać artystą tatuażu lub rozszerzyć swój dotychczasowy warsztat? Nasze czterodniowe szkolenie jest idealną okazją, aby rozwinąć swoje umiejętności i wiedzę w świecie tatuażu. Program szkoleniowy skupia się na praktycznym podejściu do nauki, gdzie 80% czasu poświęcamy na bezpośrednie doświadczenia i ćwiczenia, a tylko 20% na niezbędną teorię. Dzięki temu będziesz mógł szybko przenieść swoją wiedzę na realne sytuacje w studiu tatuażu.</p>
  <p>Nasze zajęcia grupowe są ograniczone do maksymalnie pięciu osób, co gwarantuje indywidualne podejście do każdego uczestnika i umożliwia dokładną pracę nad techniką i stylem. Niezależnie od tego, czy jesteś początkujący, czy już pracujesz w branży, nasze intensywne szkolenie zapewni ci umiejętności i pewność siebie, które są kluczowe w profesjonalnym studio tatuażu.</p>
</div>
    </div>
      </div>
      {/* <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div> */}
      <div className={styles.spacer}>
      <div className={styles.trainingInfo}>
        <h2>4 dni</h2>
        <h2>32 godziny nauki</h2>
        <h2>80% praktyki/20% teorii</h2>
        <h2>Grupa 5 osób</h2>
        <h2>Budowanie portfolio</h2>
        <h2>Certyfikat</h2>
      </div>
      {/* <div className={styles.training}>
      <MaskHeader/>
      <div className={styles.trainingImage}>
        <Image 
              src='/images/training.jpeg'
              alt='szkolenia'
              width={650}
              height={800}
              className={styles.trainingImg}
            />
      </div>

    </div> */}
      </div>
      <div className={styles.spacer}>
      <div className={styles.trainingDays}>
        <Day />
      {/* <div className={styles.trainingDay}>
        <h3>Dzień 1</h3>
        <div className={styles.trainingDaySection}>
            <h4>Teoria</h4>
            <ul>
              <li>Rys historyczny tatuażu</li>
              <li>Własne studio – od czego zacząć? (sanepid, ubezpieczenie, wymogi lokalowe, sprzęt, marketing)</li>
              <li>Zasady BHP</li>
              <li>Dezynfekcja i sterylizacja</li>
              <li>Omówienie sprzętu, narzędzi i materiałów potrzebnych do pracy (maszynki, igły, tusze , zasilacze, leżanki itd.)</li>
              <li>Przygotowanie stanowiska pracy</li>
              <li>Przygotowanie sprzętu: zasilacz, okablowanie, maszynka</li>
              <li>Kwestie formalno-informacyjne, które powinny być omówione z klientem przed rozpoczęciem pracy + informacje udzielane przed i po wykonaniu zabiegu</li>
              <li>Praca z Klientem</li>
              <li>Przeciwskazania do wykonania tatuażu</li>
            </ul>
            <Image 
              src='/images/bullarrow.png'
              alt='image'
              width={80}
              height={140}
              className={styles.arrowSection}
            />
        </div>
        <div className={styles.trainingDaySection}>
            <h4>Teoria</h4>
            <ul>
              <li>Rys historyczny tatuażu</li>
              <li>Własne studio – od czego zacząć? (sanepid, ubezpieczenie, wymogi lokalowe, sprzęt, marketing)</li>
              <li>Zasady BHP</li>
              <li>Dezynfekcja i sterylizacja</li>
              <li>Omówienie sprzętu, narzędzi i materiałów potrzebnych do pracy (maszynki, igły, tusze , zasilacze, leżanki itd.)</li>
              <li>Przygotowanie stanowiska pracy</li>
              <li>Przygotowanie sprzętu: zasilacz, okablowanie, maszynka</li>
              <li>Kwestie formalno-informacyjne, które powinny być omówione z klientem przed rozpoczęciem pracy + informacje udzielane przed i po wykonaniu zabiegu</li>
              <li>Praca z Klientem</li>
              <li>Przeciwskazania do wykonania tatuażu</li>
            </ul>
        </div>
        <div className={styles.trainingDaySection}>
            <h4>Teoria</h4>
            <ul>
              <li>Rys historyczny tatuażu</li>
              <li>Własne studio – od czego zacząć? (sanepid, ubezpieczenie, wymogi lokalowe, sprzęt, marketing)</li>
              <li>Zasady BHP</li>
              <li>Dezynfekcja i sterylizacja</li>
              <li>Omówienie sprzętu, narzędzi i materiałów potrzebnych do pracy (maszynki, igły, tusze , zasilacze, leżanki itd.)</li>
              <li>Przygotowanie stanowiska pracy</li>
              <li>Przygotowanie sprzętu: zasilacz, okablowanie, maszynka</li>
              <li>Kwestie formalno-informacyjne, które powinny być omówione z klientem przed rozpoczęciem pracy + informacje udzielane przed i po wykonaniu zabiegu</li>
              <li>Praca z Klientem</li>
              <li>Przeciwskazania do wykonania tatuażu</li>
            </ul>
        </div>
      </div> */}
      </div>
      </div>
      <div className={styles.spacer}>
      <div className={styles.summary}>
        <h4>4 Dniowy kurs tatuażu</h4>
        <div className={styles.summaryInner}>
            <p>
              Certyfikat ukończenia kursu
            </p>
            <p>
              Zbudowane portfolio
            </p>
            <p>Konsultacje po ukończeniu kursu</p>
            <p>Możliwość współpracy z nami</p>
            <p>Promocja absolwentów naszych kursów</p>
        </div>
        <div className={styles.coursePrice}>
          <p>4000<span>ZŁ</span></p>
        </div>
        </div>
        </div>
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.h1 custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.h1>
          </div>
        })
      }
    </div>
  )
}

export function MaskHeader() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases2.map( (phrase, index) => {
          return <div key={index} className={styles.trainingContent}>
            <motion.h2 custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.h2>
          </div>
        })
      }
    </div>
  )
}


export function MaskParagraph() {

  const animation = {
    initial: {x: "-100%"},
    enter: i => ({x: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        heroParagraph.map( (heroParagraph, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{heroParagraph}</motion.p>
          </div>
        })
      }
    </div>
  )
}
