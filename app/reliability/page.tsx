import React from 'react'
import Hero from '../components/hero'
import reliabilitySrc from '../../public/挨打.png'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Reliability'
}
export default function page() {
    return (
        <Hero
            imgurl={reliabilitySrc}
            alttxt="Home Image"
            content='Reliability'
        />
    )
}
