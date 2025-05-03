import * as S from "./styles";

export const HomeServices = () => {

  return (
    <S.Container id="services">
      <S.Title>Serviços</S.Title>

      <S.ImagesArea>
        <S.Image>
          <img src="https://images.homify.com/v1449752627/p/photo/image/1186128/Casa_Praia_-_1.jpg" alt="" />
        </S.Image>
        <S.Image>
          <img src="https://decorei.org/wp-content/uploads/2020/03/casas-de-campo-pintura-externa.jpg" alt="" />
        </S.Image>
        <S.Image>
          <img src="https://i.pinimg.com/736x/16/ea/6c/16ea6cd35c24cc92a3cf06c5359c8b02.jpg" alt="" />
        </S.Image>
        <S.Image>
          <img src="https://pintoruberlandia.weebly.com/uploads/1/1/7/0/117038473/casa-pintada-por-fora-1275595_orig.jpg" alt="" />
        </S.Image>
      </S.ImagesArea>
    </S.Container>
  )
}