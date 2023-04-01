import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
    return (
        <div>
            <h2>About</h2>
            <p>We are a small team who develops apps that are cute but useful</p>
            <p>Our apps lift you and help you improve while making you smile!</p>

            <div>
                <h2>Meet the team!</h2>
                <div>
                    <h3>Milky</h3>
                    <Image
                        alt='milky'
                        src={'/milky.png'}
                        width={150}
                        height={150}
                    >
                    </Image>
                </div>
            </div>
        </div>
    )
}

export default About