import styled, { css } from 'styled-components'
import { ButtonProps } from '../common/types/calc'

export const StyledApp = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue" ,Arial ,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 16px;
	width: 100%;
	max-width: 320px;
`

export const StyledIndicatorList = styled.div`
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
  min-height: 1em;
`

export const StyledExpression = styled.span`
  margin-left: auto;
`

export const StyleScreen = styled.div`
  font-size: 2.5em;
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow: hidden;
`

export const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`



const colorToCss = (color: ButtonProps['color']) => {
	switch (color) {
	  case 'red':
		return css`
		  background-color: #c04444;
		  color: #fff;
  
		  &:hover,
		  &:focus {
			background-color: #af3b3b;
		  }
		`
	  case 'green':
		return css`
		  background-color: #018645;
		  color: #fff;
  
		  &:hover,
		  &:focus {
			background-color: #016d38;
		  }
		`
	  case 'dark':
		return css`
		  background-color: #272727;
		  color: #c5830d;
  
		  &:hover,
		  &:focus {
			background-color: #1a1a1a;
		  }
		`
	}
  
	return css`
	  background-color: #2e2e2e;
	  color: #fff;
  
	  &:hover,
	  &:focus {
		background-color: #212121;
	  }
	`
}


export const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0;
  cursor: pointer;
  padding-top: 1em;
  padding-bottom: 1em;
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  ${({ color }) => colorToCss(color)}
  ${({ isLarge }) =>
    isLarge &&
    css`
      grid-column-end: span 2;
    `}

  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:focus {
    outline: 0;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 1s;
  }

  :active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`

export const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`