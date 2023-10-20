import styled from '@emotion/styled';

const visuallyHiddenStyles = `
    position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`;

export const PageTitleStyled = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: calc(32 / 24);

  ${props => (props.hidden ? visuallyHiddenStyles : '')};
`;
