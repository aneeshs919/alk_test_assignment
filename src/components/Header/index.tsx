'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InfiniteLoop from '@/components/InfiniteLoop'
import Hamburger from '@asset/hamburger.png'

const Header: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false)

  const handleHamburger = () => {
    setShowHamburger(!showHamburger)
  }

  return (
    <>
      <div className='flex py-6 justify-between items-center max-w-container m-auto px-6 lg:px-0'>
        <Link href='/'>
          <Image src='/logo.png' alt='Vercel Logo' width={101} height={23} />
        </Link>
        <Image
          className='visible lg:hidden'
          src={Hamburger}
          alt={'hamburger_icon'}
          width={42}
          height={42}
          onClick={handleHamburger}
        />
      </div>
      {showHamburger ? (
        <div className='fixed bg-black top-0 right-0 left-0 h-screen flex flex-col w-full'>
          <div className='flex justify-between items-center p-6 w-[320px]'>
            <Image src='/logo.png' alt='Vercel Logo' width={101} height={23} />
            <div onClick={handleHamburger} className='text-2xl'>
              X
            </div>
          </div>
          <ul className='flex flex-col  gap-10 py-20 pl-6'>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 w-full'>
            <InfiniteLoop />
          </div>
        </div>
      ) : null}
    </>
  )
}
export default Header
