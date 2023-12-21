'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import Forward from '../../components/Forward';
// import Map from '../../components/Map';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
  ssr: false,
})
const phrases = [
  "Bullterier",
  "Tattoo",
  "Shop",
]

const phrases2 = [
  "Szkolenia",
]

const phrases3 = [
  "Kontakt",
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
     
      <Image 
              src='/images/bullnapisjakosc.svg'
              alt='image'
              width={1200}
              height={600}
              className={styles.heroLogo}
            />
             <div className={styles.containerBottom}>
             <MaskParagraph/>
             <button>
             <Image 
              src='/images/bullarrow.png'
              alt='image'
              width={80}
              height={140}
              className={styles.arrowDown}
            />
             </button>
             </div>
    </div>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}>
      <div className={styles.training}>
      <div className={styles.trainingContent}>
      <MaskHeader/>
      
        <p className={styles.trainingContentP}>Zapraszamy do uczestnictwa w naszym ekskluzywnym, czterodniowym kursie szkoleniowym z tatuażu, organizowanym przez Bullterrier Tattoo Shop w Krakowie.</p>
          <p className={styles.trainingContentP}>Ten intensywny warsztat został zaprojektowany, aby zapewnić pasjonatom sztuki tatuażu, zarówno początkującym jak i tym z nieco większym doświadczeniem, kompleksowe i praktyczne umiejętności potrzebne do rozpoczęcia lub rozwoju ich kariery w branży tatuażu.</p>
         <p className={styles.trainingContentP}> Uczestnicy będą mieli okazję uczyć się od doświadczonych mistrzów tatuażu, którzy podzielą się swoją wiedzą i technikami w przyjaznej, inspirującej atmosferze naszego studia. Nasze szkolenie obejmuje wszystkie aspekty tatuażu, od podstaw rysunku, przez higienę i bezpieczeństwo, po zaawansowane techniki aplikacji tuszu, co sprawia, że jest to idealna okazja do pogłębienia swojej pasji i umiejętności.</p>
         <a className={styles.trainingContentLink} href='/szkolenia'>Zobacz program szkolenia</a>
      </div>
      <div className={styles.trainingImage}>
        <Image 
              src='/images/training.jpeg'
              alt='szkolenia'
              width={650}
              height={800}
              className={styles.trainingImg}
            />
      </div>

    </div>
      </div>
      <div className={styles.spacer}>
        <div className={styles.about}>
          <h2 className={styles.aboutHeader}>STUDIO</h2>
          <p className={styles.aboutContentP}> Uczestnicy będą mieli okazję uczyć się od doświadczonych mistrzów tatuażu, którzy podzielą się swoją wiedzą i technikami w przyjaznej, inspirującej atmosferze naszego studia. Nasze szkolenie obejmuje wszystkie aspekty tatuażu, od podstaw rysunku, przez higienę i bezpieczeństwo, po zaawansowane techniki aplikacji tuszu, co sprawia, że jest to idealna okazja do pogłębienia swojej pasji i umiejętności.</p>
          <Image
          className={styles.aboutImage} 
          alt="Bullterier Tattoo Shop - Studio"
          src="/images/alex.png"
          width="410"
          height="1100"
          />
          <p className={styles.aboutContentP}> Uczestnicy będą mieli okazję uczyć się od doświadczonych mistrzów tatuażu, którzy podzielą się swoją wiedzą i technikami w przyjaznej, inspirującej atmosferze naszego studia. Nasze szkolenie obejmuje wszystkie aspekty tatuażu, od podstaw rysunku, przez higienę i bezpieczeństwo, po zaawansowane techniki aplikacji tuszu, co sprawia, że jest to idealna okazja do pogłębienia swojej pasji i umiejętności.</p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <MaskContact />
          <p>ul. Krakowska 1, Kraków</p>
          <div className={styles.contactMedia}>
            <Link href="https://facebook.com/profile.php?id=100087404282018" target='_blank'>Facebook</Link>
            <Link href="https://www.instagram.com/bullteriertattooshopkrk" target='_blank'>Instagram</Link>
            <Link href="mailto:bullteriertattooshop@gmail.com">Email</Link>
          </div>
        </div>
        <div className={styles.contactRight}>
        <MapWithNoSSR />
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
    initial: {y: "10%", opacity: 0},
    enter: i => ({y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
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

export function MaskContact() {

  const animation = {
    initial: {y: "10%", opacity: 0},
    enter: i => ({y: "0", opacity: 1, transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases3.map( (phrase, index) => {
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
