import React from 'react'
import reliabilitySrc from '../../public/黄猴子.png'
import Hero from '../components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Scale'
}
export default function page() {
    return (
        <Hero
            imgurl={reliabilitySrc}
            alttxt="Home Image"
            content='Scale'
        />
    )
}
