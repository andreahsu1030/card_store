import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import imageList from './util/productImgs'

type CardProps = {
  href: StaticImageData
  title: string
  des: string
}

const Menu = () => {
  return (
    <div className='flex justify-between px-10 py-3'>
      <h2>Card Store</h2>
      <ul className='flex'>
        <li>
          <Link className='p-2' href='/store'>
            商店
          </Link>
        </li>
        <li>
          <Link className='p-2' href='/cart'>
            購物車
          </Link>
        </li>
      </ul>
    </div>
  )
}

const Card = ({ href, title, des }: CardProps) => {
  return (
    <div className='m-4'>
      <div className='w-[190px] h-[265px] relative'>
        <Image style={{"borderRadius": "5px"}} src={href} objectFit='cover' alt='products pic' fill />
      </div>
      <p className='mt-2 font-bold text-center'>{title}</p>
      <p>{des}</p>
    </div>
  )
}
const Content = () => {
  return (
    <div>
      <div className='w-[70%] m-auto flex justify-center'>
        {imageList.map((item) => (
          <Card
            key={`${item.title}-${item['sub-title']}`}
            href={item.href}
            title={item.title}
            des={item['sub-title']}
          />
        ))}
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Menu />

      <Content />
    </>
  )
}
