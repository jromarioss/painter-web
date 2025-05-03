import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full
px-4
py-8
bg-project-blue-100

md:px-[32px]
md:py-[64px]
`;

export const Title = tw.h2`
text-2xl
text-white
font-medium
text-center
mb-4

md:mb-8
md:text-4xl

xl:text-5xl
xl:mb-10
`;

export const ImagesArea = tw.div`
flex
flex-col
items-center
gap-6

landscape:flex-row
landscape:flex-wrap
landscape:justify-center

md:flex-row
md:flex-wrap
md:justify-center
md:gap-8

xl:gap-10
`;

export const Image = tw.div`
w-[300px]
h-[250px]

[&>img]:w-full
[&>img]:h-full
[&>img]:object-cover

md:w-[400px]
md:h-[300px]
`;