import Image from 'next/image'
import group from '@asset/group.png'
const About = () => {
  return (
    <div className='lg:flex my-20  hidden'>
      <div className='relative w-5/12 h-[375px]'>
        <div className='text-7xl uppercase font-bold'>
          About <br /> Us
        </div>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
        <Image
          className='absolute right-0 top-[65px]'
          src={group}
          alt='group_icon'
          width='280'
          height='280'
        />
      </div>
      <div className='w-7/12 pl-16 pt-12 text-slate-300'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  )
}

export default About
