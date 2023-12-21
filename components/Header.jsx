import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className='header--container'>
      <a href="/">
          <Image
          className='logo'
            alt="Bullterrier Tattoo Shop"
            src='/images/bulltlogo.png'
            width="123"
            height="147"
          />
        </a>
        <nav>
        <a href="/">Home</a>
        <a href="/szkolenia">Szkolenia</a>
        <a href="/szkolenia">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
