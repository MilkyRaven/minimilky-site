import React from 'react'
import Image from 'next/image'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div>
            <h1>
                Welcome! This is Mini Milky, an indie studio
            </h1>
            <div className='banner'>
                <Image
                    alt='logo'
                    src={'/studio.jpg'}
                    width={640}
                    height={426}
                >
                </Image>
            </div>
        </div>
    )
}

export default Banner