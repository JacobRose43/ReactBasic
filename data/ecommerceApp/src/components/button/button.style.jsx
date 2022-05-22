import styled from 'styled-components';

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	transition: all 300ms;
	border: 1px solid white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: white;
		border: 1px solid #4285f4;
		color: #4285f4;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: transparent;
		color: white;
		border: 1px solid white;
	}
`;
