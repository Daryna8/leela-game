import {
  StyledHomeContainer,
  StyledInfo,
  StyledTitle,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <StyledHomeContainer>
      <StyledTitle>Leela</StyledTitle>
      <StyledInfo>
        Ліла - є концепцією, яка має глибокі корені в індійській філософії та
        духовності. Термін "Ліла" в перекладі з санскриту означає "гра". Гра
        життя Ліла розглядається як універсальний процес, що відбувається
        усередині кожної індивідуальності, де кожна дія й подія є частиною
        великої космічної гри.
      </StyledInfo>
      <StyledInfo>
        Одним із ключових аспектів Ліли є її трансформаційний характер. Гра Ліла
        надає можливість кожній індивідуальності розвиватися, вчитися та рости
        через взаємодію з навколишнім світом та іншими істотами. Цей процес
        трансформації може бути як фізичним, так і духовним.
      </StyledInfo>
      <StyledInfo>
        Хоча концепція "Ліла" може здатися складною або абстрактною, вона надає
        можливість для глибокого розуміння себе і свого місця в світі. Вона
        сприяє розвитку внутрішньої мудрості і сприйняття гармонії в усьому
        бутті.
      </StyledInfo>

      <StyledTitle>Як проходить гра?</StyledTitle>
      <StyledInfo>Гральне поле складається з 72 клітинок.</StyledInfo>
      <StyledInfo>
        Гравець озвучує намір і кидає кубик, якщо на кубику випало 6, гравець
        "народжується" в грі. Якщо інша цифра, гравець має сформувати свій намір
        трохи по іншому або ж змінити його і знову кинути кубик. Так
        відбувається до тих пір, поки на гральному кубику не випаде 6. Бувають
        випадки коли "не пускає" в гру. ...{" "}
      </StyledInfo>
    </StyledHomeContainer>
  );
};
export default HomePage;
