import React from 'react'
import reliabilitySrc from '../../../public/猴子.png'
import Hero from '../../components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Performance'
}
export default function page() {
    return (
        <Hero
            imgurl={reliabilitySrc}
            alttxt="Home Image"
            content='Perfessional Cloud Hosting'
        />
    )
}
