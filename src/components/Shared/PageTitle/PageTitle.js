import { PageTitleStyled } from './PageTitle.styled';

export const PageTitle = ({ children, hidden = false }) => {
  return <PageTitleStyled hidden={hidden}>{children}</PageTitleStyled>;
};
