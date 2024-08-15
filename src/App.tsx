import './App.css';
import Header from './components/Header/Header';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './components/common/404/404';
import Password from './components/Password/Password';
import BMI from "./components/BMI/BMI";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";
import TicTacToe from './components/TTT/TTT';
import useCustomContext from './components/common/hooks/useCustomContext'
import TodoList from './components/TodoList/TodoList'

const App = () => {

  const {isDark} = useCustomContext()

  return (
    <HashRouter>
      <div className={isDark ? "App" : "App light"}>
        <Header />
        <main className="main">
          <Routes>
            <Route path='*' element={<ErrorPage  />} />
            <Route path='/' element={<Navigate to={'timer'} />} />
            <Route path='todolist' element={<TodoList  />} />
            <Route path='password' element={<Password />} /> 
            <Route path='bmi' element={<BMI />} />
            <Route path='timer' element={<Timer />} />
            <Route path='calculator' element={<Calculator />} />
            <Route path='tictac' element={<TicTacToe />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
export default App;