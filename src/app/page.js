'use client'
import Carsoule from "@/components/Homepage/Carsoule";
import Image from "next/image";
import ne from "/public/next.svg"
import Link from "next/link";
import Sponser from "@/components/Homepage/Sponser";
import Main from "@/components/Homepage/main";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
         offset:300
       })
 }, [])


 

  
  return (
    <>
    <Carsoule />
 <div data-aos="fade-up"><Main/></div>
     <Sponser/>
      
    </>
      );
}
