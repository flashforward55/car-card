import styled from '@emotion/styled';
import { theme } from 'styles';

export const CardItem = styled.li`
  width: 274px;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s ${theme.transitions.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  display: flex;
  top: 14px;
  right: 14px;
  pointer-events: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  max-width: 90%;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-align: left;

  display: -webkit-box;
  overflow-wrap: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

export const TitleAccent = styled.span`
  color: ${theme.colors.textAccent};
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 6px;
  margin-bottom: 28px;
`;

export const TagItem = styled.li`
  color: ${theme.colors.textTransparentPrimary};

  &:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid ${theme.colors.borderSecondary};
  }
`;

export const BtnWrapper = styled.div`
  margin-top: auto;
`;
