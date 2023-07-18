'use client'
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

const NavLink = styled.a`
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 22px;
    padding: 4px;
    transition: border-color .2s;

    &:hover {
        border-bottom: 1px solid black;
        text-decoration: none;
    }
    `

export default function Header(){

    return (
        <header className="bg-lighter max-w-[1280px] mx-auto flex items-center justify-between px-8">   
            <div className="py-5">
                <Link href="/">
                <Image src="/logo.png" width={120} height={50} alt="Website logo" priority={true} />
                </Link>
            </div>
            <nav className="capitalize flex gap-6">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#services">What I do</NavLink>
                <NavLink href="#work">My Work</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </nav>
        </header>
    )
}