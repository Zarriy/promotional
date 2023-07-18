'use client';
import { SectionHeadline } from "@/utils/stylesComponents"
import FeaturedCard from "./FeaturedCard";

export default function FeaturedProjects(){

    return(
        <div className="py-16 text-center">
            <SectionHeadline>Featured Projects</SectionHeadline>
            <div className="mt-16">
             <FeaturedCard />
            </div>
        </div>
    )
}