'use client'
import Image from "next/image";
import { styled } from "styled-components";
import { SmallHeadline, MainBtn } from "@/utils/stylesComponents";


const MainHeadline = styled.h1`
    margin-top: 0px;
    margin-bottom: 16px;
    font-size: 64px;
    line-height: 120%;
    font-weight: 700;
`


export default function HeroComponent(){
    return(
        <div className="flex justify-between items-center py-16">
            <div className="flex-1">
                <div>
                    <SmallHeadline>Hi, My name is Zawar</SmallHeadline>
                    <MainHeadline>I craft Websites with Code.</MainHeadline>
                    <SmallHeadline>Seasoned Developer & Mentor | Bridging code and creativity to build exceptional digital experiences and scale businesses.</SmallHeadline>
                </div>
                <button className="pt-5"><MainBtn href="/">Get in touch</MainBtn></button>
            </div>
            <div className="flex-1 relative">
                 <Image className="absolute -top-14 left-24 z-20"  src="/des.png" width={480} size="(max-width: 479px) 300px, (max-width: 767px) 350px, (max-width: 991px) 300px, 350px" height={300}/>
                <Image src="/kristi.jpeg" className="ml-auto mr-12" width={350} sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 1439px) 48vw, 516px" height={50} />
            </div>
        </div>
    )
}