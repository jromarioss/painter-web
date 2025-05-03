import tw from "tailwind-styled-components";

export const Container = tw.div`
w-[250px]
h-full
flex
items-center
justify-center
fixed
top-0
right-0
z-10
bg-project-blue-100
`;

export const HeaderMenu = tw.nav`
flex
flex-col
gap-10
items-center
justify-center
`;
export const ButtonHeaderMenu = tw.button`
text-white
text-2xl
font-medium
cursor-pointer
`;

export const ButtonMobileHeaderMenu = tw.button`
flex
items-center
justify-center
absolute
top-4
right-4

[&>svg]:text-white
[&>svg]:text-[54px]
`;