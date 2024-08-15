import { NavLink } from 'react-router-dom'
import useCustomContext from '../common/hooks/useCustomContext'
import { FormControlLabel } from '@mui/material'
import { MaterialUISwitch } from './costomizeSwith'

const Header = () => {

    const {setIsDark, isDark} = useCustomContext()
  
    return <header className="header">
                    <nav>
                        <NavLink className="header__link" to={'/todolist'} >TodoList</NavLink>
                        <NavLink className="header__link" to={'/password'} end>Password</NavLink>
                        <NavLink className="header__link" to={'/bmi'} >BMI</NavLink>
                        <NavLink className="header__link" to={'/timer'} >Timer</NavLink>
                        <NavLink className="header__link" to={'/calculator'} >Calculator</NavLink>
                        <NavLink className="header__link" to={'/tictac'} >Tic-Tac-Toe</NavLink>
                    </nav>        
                    <FormControlLabel
                        checked={isDark}
                        onChange={() => setIsDark(!isDark)}
                        control={<MaterialUISwitch sx={{ m: 1 }} />}
                        label=""
                    />
           </header>
}
export default Header;