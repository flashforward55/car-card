import styled from '@emotion/styled';
import { theme } from 'styles';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    background-color: ${theme.colors.bgBackdrop};
    z-index: 1;
`;
