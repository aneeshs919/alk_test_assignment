'use client'
import { useState } from 'react'
interface ToggleViewProps {
  title: string
  answer: string
  index: number
  active: boolean | null
  onToggle: () => void
}

interface AccordionProps {
  data: {
    title: string
    answer: string
  }[]
}

const ToggleView: React.FC<ToggleViewProps> = props => {
  const [show, setShow] = useState<any>(null)
  const activeStyle = 'bg-gradient-to-r from-[#58395f] to-[#1caf7b] p-2'
  const handleToggleView = (index: number) => {
    setShow(show === index ? null : index)
    props.onToggle && props.onToggle()
  }

  return (
    <div className='py-2'>
      <div
        className={`uppercase cursor-pointer flex justify-between align-middle mb-4 ${
          props.active ? activeStyle : ''
        }`}
        onClick={() => handleToggleView(props.index)}
      >
        {props.title}
        <div className='text-2xl leading-none items-center'>
          {props.active ? '-' : '+'}
        </div>
      </div>
      {props.active ? <div>{props.answer}</div> : null}
    </div>
  )
}

const Accordion: React.FC<AccordionProps> = props => {
  const [accordionActive, setAccordionActive] = useState<number | ''>(0)
  const handleToggle = (index: number) => {
    setAccordionActive(accordionActive === index ? '' : index)
  }
  return (
    <div>
      {props.data.map((faq, index) => (
        <ToggleView
          key={faq.title}
          title={faq.title}
          active={accordionActive === index}
          answer={faq.answer}
          onToggle={() => handleToggle(index)}
          index={index}
        />
      ))}
    </div>
  )
}

export default Accordion
