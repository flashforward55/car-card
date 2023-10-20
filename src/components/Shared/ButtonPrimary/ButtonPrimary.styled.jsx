// Libs
import styled from '@emotion/styled';
import { theme } from 'styles';

const CommonStyles = `
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(20 / 14);
    color: ${theme.colors.textBtn};
    background-color: ${theme.colors.bgAccent};
    border-radius: 12px;
    transition: background-color 0.2s ${theme.transitions.cubicBezier};

    &:hover,
    &:focus {
        background-color: ${theme.colors.bgAccentHover};
    }
`;

export const ButtonStyled = styled.button`
    ${CommonStyles};
    width: ${props => props.btnWidth};
    padding: ${props => props.btnPadding};
`;

export const LinkStyled = styled.a`
    ${CommonStyles}
    width: ${props => props.btnWidth};
    padding: ${props => props.btnPadding};
`;

export const ButtonPrimaryStyled = ({ tag, ...props }) => {
    return tag === 'a' ? (
        <LinkStyled {...props} />
    ) : (
        <ButtonStyled {...props} />
    );
};
