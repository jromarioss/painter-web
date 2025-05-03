import tw from "tailwind-styled-components";

export const Content = tw.div`
w-full
h-full
flex
flex-col
items-center
`;

export const ButtonWhatsapp = tw.a`
w-[64px]
h-[64px]
fixed
bottom-4
right-4

[&>img]:w-full
[&>img]:h-full
[&>img]:object-cover

md:w-[84px]
md:h-[84px]
md:bottom-8
md:right-8

lg:w-[100px]
lg:h-[100px]
`;

export const ButtonUp= tw.button`
w-[44px]
h-[44px]
flex
items-center
justify-center
border-2
border-white
rounded-lg
fixed
bottom-4
left-4
bg-project-blue-100

[&>svg]:text-white
[&>svg]:text-2xl

md:w-[64px]
md:h-[64px]
md:[&>svg]:text-4xl
md:bottom-8
md:left-8
`;