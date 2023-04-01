import React from 'react'
import Image from 'next/image'

type Props = {}

const Currently = (props: Props) => {
    return (
        <div>
            <h2>Currently working on...</h2>
            <Image
                alt='logo'
                src={'/littlesips_2.gif'}
                width={300}
                height={300}
            >
            </Image>
            <h3>Little Sips</h3>
            <p>Little Sips is a special water tracker that allows you to custom your experience</p>
            <p>Pick your own avatar, pet and unlock lots of backgrounds!</p>
            <p>New designs coming every month 💕</p>
        </div>
    )
}

export default Currently