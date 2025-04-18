import homeSrc from '@/public/哈登.png'
import Hero from "@/app/components/hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <Hero
      imgurl={homeSrc}
      alttxt="Home Image"
      content='Welcome to our website'
    />
  );
}
