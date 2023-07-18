'use client'
import { SmallHeadline, SectionHeadline } from "@/utils/stylesComponents";
import ServicesCard from "./servicesCard";



export default function Services(){
    return(
        <div className="py-16">
            <div className="text-center">
              <SmallHeadline>Passion led us here</SmallHeadline>
             <SectionHeadline>What I do</SectionHeadline>
            </div>
            <div className="mt-16 flex justify-between">
             <ServicesCard />
             <ServicesCard />
             <ServicesCard />
            </div>
        </div>
    )
}