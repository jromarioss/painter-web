import tw from "tailwind-styled-components";

export const Container = tw.div`
w-full
h-[250px]
p-4
flex
flex-col
items-center
justify-start
gap-4
bg-[url('/assets/painter-header.svg')]
bg-no-repeat
bg-center

md:h-[300px]
md:p-8

lg:bg-cover

xl:h-[500px]
`;

export const HeaderMenu = tw.nav`
w-full
flex
justify-end
`;

export const HeaderButtons = tw.div`
hidden

md:flex
md:gap-4

lg:gap-8
`;

export const ButtonHeaderMenu = tw.button`
text-white
text-xl

lg:text-2xl
`;

export const ButtonMobileHeaderMenu = tw.button`
flex
items-center
justify-center

[&>svg]:text-white
[&>svg]:text-[54px]

md:hidden
`;

export const HeaderInfo = tw.section`
flex
flex-col
gap-1

md:flex-1
md:justify-center
md:gap-4

lg:gap-8

xl:gap-10
`;

export const SubTitle = tw.h3`
text-white
drop-shadow-md
text-center
text-lg
font-medium

md:text-2xl

lg:text-[32px]

xl:text-[44px]
`;

export const Title = tw.h2`
text-white
drop-shadow-md
text-center
text-2xl
font-medium

md:text-[42px]
md:font-bold

lg:text-[44px]

xl:text-[64px]
`;