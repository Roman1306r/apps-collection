import { FunctionComponent } from 'react'
import { ButtonProps } from '../common/types/calc'
import { StyledButton } from './styles'

export const Button: FunctionComponent<ButtonProps> = ({ children, color, isLarge, onClick }) => {
  return (
    <StyledButton color={color} isLarge={isLarge} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
export default Button