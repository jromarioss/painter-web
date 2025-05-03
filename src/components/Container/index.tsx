
import { ReactNode } from "react";
import * as S from "./styles";
import { Footer } from "../";

interface IContainer {
  children: ReactNode;
}

export const Container = ({ children }: IContainer) => {

  return (
    <S.Container>
      {children}
      <Footer />
    </S.Container>
  )
}