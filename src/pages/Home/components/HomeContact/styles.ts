import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full
px-4
py-8

md:px-[32px]
md:py-[64px]

lg:w-[900px]

xl:w-[1200px]
xl:px-0
`;

export const Title = tw.h2`
text-2xl
font-medium
text-center
mb-4

md:mb-8
md:text-4xl

xl:text-5xl
xl:mb-10
`;

export const Text = tw.p`
text-lg
text-justify
indent-2

md:text-2xl

xl:text-3xl
`;

export const Zap = tw.a`
text-lg
text-justify
indent-2
font-medium
text-project-green-100
underline

md:text-2xl

xl:text-3xl
`;