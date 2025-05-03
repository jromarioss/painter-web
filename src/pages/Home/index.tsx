import { useMain } from "@/hooks";
import * as S from "./styles";
import * as CH from "./components";
import { Container, Menu } from "@/components";
import ZapSvg from "@/assets/zap-icon.svg";
import { useHome} from "./hook";
import { FaArrowUp } from "react-icons/fa6";

export function Home() {
  const { showMenu } = useMain();
  const { handleGoTo, showButtonWhatsapp } = useHome();

  return (
    <Container>
      {showMenu && <Menu onHandleGoTo={handleGoTo} />}

      <S.Content>
        <CH.HomeHeader onHandleGoTo={handleGoTo} />
        <CH.HomeAbout />
        <CH.HomeServices />
        <CH.HomeContact />
      </S.Content>

      {showButtonWhatsapp &&
        <S.ButtonUp onClick={() => handleGoTo("home")}>
          <FaArrowUp />
        </S.ButtonUp>}

      {showButtonWhatsapp &&
        <S.ButtonWhatsapp href="https://wa.me/5515991275928" target="_blank" rel="noopener noreferrer">
          <img src={ZapSvg} alt="" />
        </S.ButtonWhatsapp>}
    </Container>
  )
}