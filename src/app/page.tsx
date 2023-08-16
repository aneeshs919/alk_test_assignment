import icon from '@asset/icon.png'
import frame1 from '@asset/frame1.png'
import frame2 from '@asset/frame2.png'
import Header from '@/components/Header'
import TitleDescriptionCard from '@/components/TitleDescriptionCard'
import ToggleView from '@/components/ToggleView'
import InfiniteLoop from '@/components/InfiniteLoop'
import { dataArray, faqData } from './constants'
import About from './aboutSection'

export default function Home () {
  return (
    <main>
      <Header />
      <div className='max-w-container m-auto px-6 lg:px-0'>
        <h1 className='text-6xl uppercase my-8'>Heading</h1>
        <div className='flex flex-col lg:flex-row gap-4 my-10 lg:my-16'>
          {dataArray.map(data => (
            <TitleDescriptionCard
              key={data.title}
              title={data.title}
              description={data.description}
              icon={data.icon}
              photo={data.image}
              className='lg:w-1/3'
            />
          ))}
        </div>
        <div className='flex flex-col lg:flex-row gap-4 my-16'>
          {dataArray?.slice(0, 2).map(data => (
            <TitleDescriptionCard
              key={data.title}
              title={data.title}
              description={data.description}
              icon={data.icon}
              photo={data.image}
              className='lg:w-1/3'
            />
          ))}
        </div>
        <div className='flex justify-end'>
          <TitleDescriptionCard
            title={'Lorem Ipsum'}
            description={
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
            }
            icon={icon}
            photo={frame1}
            className='w-9/12 flex flex-col lg:flex-row gap-5'
          />
        </div>
        <About />
      </div>
      <InfiniteLoop />
      <div className=' max-w-container m-auto p-6 lg:p-0'>
        <h1 className='text-4xl lg:6xl uppercase my-8  pt-10 lg:pt-20 font-bold'>
          lorem ipsum <br /> dolor set
        </h1>
        <div className='flex flex-col lg:flex-row gap-4 my-16'>
          {dataArray?.slice(0, 2).map(data => (
            <TitleDescriptionCard
              key={data.title}
              title={data.title}
              description={data.description}
              icon={data.icon}
              photo={data.image}
              className='lg:w-1/3'
            />
          ))}
        </div>
        <div className='flex justify-end'>
          <TitleDescriptionCard
            title={'Lorem Ipsum'}
            description={
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
            }
            icon={icon}
            photo={frame2}
            className='w-9/12 flex-col lg:flex-row gap-5'
          />
        </div>
      </div>
      <h1 className='text-4xl lg:6xl uppercase my-8 lg:my-10 pt-20 font-bold text-left lg:text-center pl-6'>
        lorem ipsum dolor
      </h1>
      <div className='max-w-container m-auto p-6 lg:p-0'>
        <ToggleView data={faqData} />
      </div>
    </main>
  )
}
