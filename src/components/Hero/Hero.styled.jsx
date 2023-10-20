// Libs
import styled from '@emotion/styled';

export const HeroStyled = styled.div`
  background: linear-gradient(to right, #007bff, #0056b3); /* Градиентный фон */
  color: #000; /* Белый цвет текста */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const HeroTextWrapper = styled.div`
  flex: 1;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Тень блока */
  border: 1px solid #ccc; /* Бордер вокруг блока */
  padding: 20px;
  background-color: #fff; /* Белый фон */
  /* Дополнительные стили по вашему выбору */
`;

export const HeroText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  //font-family: 'Roboto', sans-serif; /* Пример выбора шрифта */
`;

export const RedirectionLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s;

  transition: background-color 0.3s, transform 0.2s; /* Добавление анимаций */
  transform: scale(1); /* Начальный масштаб */

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Увеличение размера при наведении */
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
`;
