import styled from '@emotion/styled';
import { theme } from 'styles';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;

  & > label:first-of-type {
    width: 224px;
  }

  & > label:last-of-type {
    width: 135px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

export const InputHeading = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${theme.colors.textSecondary};
`;

export const selectStyles = {
  container: baseStyles => ({
    ...baseStyles,
    width: '100%',
  }),
  control: baseStyles => ({
    ...baseStyles,
    height: '46px',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: 'calc(20 / 18)',
    textAlign: 'left',
    backgroundColor: `${theme.colors.bgSecondary}`,
    borderRadius: '14px',
    border: '0',
    outline: '0',
    cursor: 'text',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
    height: '272px',
    padding: '14px 18px',
    marginTop: '4px',
    backgroundColor: `${theme.colors.bgPrimary}`,
    border: `1px solid ${theme.colors.borderPrimary}`,
    borderRadius: '14px',
    '&::-webkit-scrollbar': {
      width: '26px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '13px',
      backgroundColor: `${theme.colors.bgScroll}`,
      border: `9px solid ${theme.colors.bgPrimary}`,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: `${theme.colors.textTransparentSecondary}`,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '16px',
    lineHeight: 'calc(20 / 16)',
    textWrap: 'nowrap',
    padding: 0,
    color: state.isSelected
      ? `${theme.colors.textPrimary}`
      : `${theme.colors.textTransparentSecondary}`,
    '&:hover': {
      color: `${theme.colors.textPrimary}`,
    },
  }),
  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    padding: '0 18px 0 6px',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexWrap: 'no-wrap',
    height: '100%',
    padding: '0 0 0 18px',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    margin: '0',
    fontSize: '18px',
    fontWeight: '500',
    textAlign: 'left',
    textWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: `${theme.colors.textPrimary}`,
  }),
};

export const Fieldset = styled.fieldset`
  position: relative;
  width: 320px;
  height: 72px;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const Legend = styled.legend`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${theme.colors.textSecondary};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: end;
  height: 100%;

  & > label:first-of-type {
    border-radius: 14px 0 0 14px;
    border-right: 1px solid ${theme.colors.borderAdditional};
  }

  & > label:last-of-type {
    border-radius: 0 14px 14px 0;
  }

  & > label:first-of-type > input {
    padding: 14px 24px 14px 70px;
  }

  & > label:last-of-type > input {
    padding: 14px 24px 14px 48px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  overflow: hidden;
`;

export const LabelText = styled.span`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const NumberInput = styled.input`
  width: 160px;
  padding: 14px 24px 14px 70px;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  color: ${theme.colors.textPrimary};
  background-color: ${theme.colors.bgSecondary};
  border: 0;
  outline: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const ErrorValidationText = styled.p`
  position: absolute;
  top: 75px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${theme.colors.errorValidationText};
`;
