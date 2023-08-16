const numberArray = Array.from(Array(25).keys())
const InfiniteLoop = () => {
  return (
    <div className='bg-gradient-to-r from-[#58395f] to-[#1caf7b] p-3  mt-8'>
      <ul className='flex justify-between whitespace-nowrap gap-20 animate-infiniteLoop'>
        {numberArray.map(item => (
          <li key={item}>{'Lorem Ipsum'}</li>
        ))}
      </ul>
    </div>
  )
}
export default InfiniteLoop
