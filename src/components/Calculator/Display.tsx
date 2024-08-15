import { FunctionComponent, memo } from 'react'
import { DisplayProps } from '../common/types/calc'
import { StyledDisplay, StyledExpression, StyledIndicatorList, StyleScreen } from './styles'

export const Screen: FunctionComponent<DisplayProps> = memo(({ value, hasMemory, expression }) => {
  return (
    <StyledDisplay>
      <StyledIndicatorList>
        {hasMemory &&
          <span>M</span>
        }
        <StyledExpression>
          {expression}
        </StyledExpression>
      </StyledIndicatorList>

      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
})
export default Screen