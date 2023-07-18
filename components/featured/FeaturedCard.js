'use client'
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { styled } from "styled-components";

const Labels = styled.div`
    border: 1px solid #282825;
    border-radius: 100px;
    margin-right: 16px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    box-shadow: 3px 3px #282825;
    margin: 0;
`

const HeroText = styled.h3`
    text-transform: none;
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 600;
    line-height: 130%;
`;
const LinkText = styled.div`
    color: #282825;
    letter-spacing: .5px;
    align-items: center;
    margin-top: auto;
    font-weight: 600;
    text-decoration: none;
    transition: opacity .25s ease-in-out;
    display: flex;
`

export default function FeaturedCard(){
    
    return (
        <Link href="/" className="inline-block w-full">
        <div className="bg-white flex flex-wrap justify-between items-center mt-0">
            <div className="grow-0 shrink-0 basis-1/2">
                <Image src="/cardImg.jpeg" alt="featured section image"  sizes="(max-width: 767px) 100vw, 50vw" width={800} height={500}/>
            </div>
            <div className="grow-0 shrink-0 basis-1/2 pr-[24px] pl-[40px] text-left">
                <div className="mb-12 space-x-3">
                    <Labels className="label bg-pink-400">
                        <div>Website</div>
                    </Labels>
                    <Labels className="label bg-yellow-400">
                        <div>Web Design</div>
                    </Labels>
                </div>
                <HeroText>SweatPaws: Dog Health Quiz for Gen Z</HeroText>
                <p className="mt-0 mb-6">This playful dog step calculator is designed for GenZ and their love for dogs. I was experimenting with neon and Midjourney AI to bring you a truly pawsome user experience.</p>
                <LinkText>
                    See full case study <BsArrowRight className="w-5 h-5 ml-2" />
                </LinkText>
            </div>
        </div>
        </Link>
    )
}