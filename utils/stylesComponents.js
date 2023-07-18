import { styled } from "styled-components";

export const MainBtn = styled.a`
height: 54px;
color: #282825;
letter-spacing: .5px;
text-transform: capitalize;
background-color: #f7cb45;
border: 1px solid #282825;
border-radius: 50px;
align-content: center;
justify-content: center;
align-items: center;
padding: 0 32px;
font-weight: 600;
line-height: 54px;
text-decoration: none;
transition: box-shadow .25s cubic-bezier(.645,.045,.355,1),transform .25s cubic-bezier(.645,.045,.355,1);
display: inline-block;
box-shadow: 3px 3px #282825;

&:hover{
transform: translate(-4px,-4px);
box-shadow: 6px 6px #282825;
}`;

export const SmallHeadline = styled.h3`
color: #52514e;
margin-bottom: 16px;
font-size: 20px;
font-weight: 500;
line-height: 140%;
`;

export const SectionHeadline = styled.h2`
    margin: 0;
    font-size: 48px;
    font-weight: 600;
    line-height: 120%;
`;