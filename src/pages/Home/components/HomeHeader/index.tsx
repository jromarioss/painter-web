import { IoMenu } from "react-icons/io5";
import * as S from "./styles";
import { useMain } from "@/hooks";
import { BUTTONS_MENU, IBUTTONS_MENU } from "@/utils/buttons-menu";

interface IHomeHeader {
  onHandleGoTo: (value: string) => void;
}

export const HomeHeader = ({ onHandleGoTo }: IHomeHeader) => {
  const { setShowMenu } = useMain();

  return (
    <S.Container>
      <S.HeaderMenu>
        <S.HeaderButtons>
          {BUTTONS_MENU.map((item: IBUTTONS_MENU) => {
            return item.status === 1 ?
              <S.ButtonHeaderMenu key={item.id} onClick={() => onHandleGoTo(item.value)}>
                {item.label}
              </S.ButtonHeaderMenu>
              :
              null
          })}
        </S.HeaderButtons>

        <S.ButtonMobileHeaderMenu onClick={() => setShowMenu(true)}>
          <IoMenu />
        </S.ButtonMobileHeaderMenu>
      </S.HeaderMenu>

      <S.HeaderInfo>
        <S.Title>Marcos Felipe Frederico Barbosa</S.Title>
        <S.SubTitle>Serviço de Pintura de Qualidade</S.SubTitle>
      </S.HeaderInfo>
    </S.Container>
  )
}