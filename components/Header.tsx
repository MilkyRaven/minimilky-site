import React from 'react'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
    <Image
    alt='logo'
    src={'/logo.png'}
      width={100}
      height={100}
      >
    </Image>
    </div>
  )
}

export default Header