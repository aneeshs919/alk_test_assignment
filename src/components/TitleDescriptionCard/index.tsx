import Image, { StaticImageData } from 'next/image'

interface TitleDescriptionCardProps {
  title: string
  description: string
  photo?: string | StaticImageData //photo prop optional using "?"
  icon?: string | StaticImageData //icon prop optional using "?"
  className: string
}
const TitleDescriptionCard: React.FC<TitleDescriptionCardProps> = props => {
  return (
    <div className={`${props.className} mt-8 lg:mt-0`}>
      {props.photo ? (
        <Image className='mb-8' src={props.photo} alt={props.title} />
      ) : null}
      <div>
        <div className='text-md uppercase mb-4  font-bold'>{props.title}</div>
        <div className='text-slate-300'>{props.description}</div>
        {props.icon ? (
          <Image
            className='mt-2 lg:mt-8'
            src={props.icon}
            alt={props.title}
            width={22}
            height={23}
          />
        ) : null}
      </div>
    </div>
  )
}

export default TitleDescriptionCard
