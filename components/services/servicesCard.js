'use client'
import Image from "next/image";
import { styled } from "styled-components";
import {BsArrowRight} from 'react-icons/bs';

const ParentContainer = styled.a`
    background-color: #fff;
    border: 1px solid #282825;
    border-radius: 20px;
    flex-direction: column;
    flex: 0 0 30.5%;
    padding: 32px 24px;
    transition: transform .25s cubic-bezier(.645,.045,.355,1),box-shadow .25s cubic-bezier(.645,.045,.355,1);
    display: flex;
    box-shadow: 3px 3px #282825;
    cursor: pointer;

    &:hover{
        transform: translate(-4px,-4px);
        box-shadow: 6px 6px #282825;
    }
`;
const ServicesHeading =  styled.h3`
    margin: 0px 0px 12px;
    font-size: 28px;
    font-weight: 600;
    line-height: 130%;    
`
const WorkLink = styled.div`
    color: #282825;
    letter-spacing: .5px;
    align-items: center;
    margin-top: auto;
    font-weight: 600;
    text-decoration: none;
    transition: opacity .25s ease-in-out;
    display: flex;

    &:hover{
        opacity: 0.7;
    }
`
export default function ServicesCard(){
    return (
        <ParentContainer>
            <div>
                <Image src="/prod.png" width={120} height={120} alt="product design" className="mb-8"/>
            </div>
            <div className="mb-6">
                <ServicesHeading>Product Design</ServicesHeading>
                <p>I have designed mobile apps, websites and eCommerce stores. In my daily work I ideate, create wireframes, lead UX researches, plan flows and deliver hi-fi prototypes.</p>
            </div>
            <WorkLink>See my work <BsArrowRight /></WorkLink>
        </ParentContainer>
    )
}