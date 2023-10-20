import { ButtonPrimaryStyled } from './ButtonPrimary.styled';

export const ButtonPrimary = ({
    children,
    tag = 'button',
    btnWidth = 'auto',
    btnPadding = '12px 44px',
    ...props
}) => {
    return (
        <ButtonPrimaryStyled
            tag={tag}
            btnWidth={btnWidth}
            btnPadding={btnPadding}
            {...props}
        >
            {children}
        </ButtonPrimaryStyled>
    );
};
