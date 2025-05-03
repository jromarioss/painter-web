import { IoMenu } from "react-icons/io5";
import * as S from "./styles";
import { useMain } from "@/hooks";
import { BUTTONS_MENU, IBUTTONS_MENU } from "@/utils/buttons-menu";

interface IMenu {
  onHandleGoTo: (value: string) => void;
}

export const Menu = ({ onHandleGoTo }: IMenu) => {
  const { setShowMenu } = useMain();

  return (
    <S.Container>
      <S.ButtonMobileHeaderMenu onClick={() => setShowMenu(false)}>
        <IoMenu />
      </S.ButtonMobileHeaderMenu>

      <S.HeaderMenu>
        {BUTTONS_MENU.map((item: IBUTTONS_MENU) => {
          return item.status === 1 ?
            <S.ButtonHeaderMenu key={item.id} onClick={() => onHandleGoTo(item.value)}>
              {item.label}
            </S.ButtonHeaderMenu>
            :
            null
        })}
      </S.HeaderMenu>
    </S.Container>
  )
}