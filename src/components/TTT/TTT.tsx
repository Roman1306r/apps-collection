import { useState } from "react";
import { Alert, Button, Collapse, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Cell from './Cell'
import { checkwinner } from '../common/utils/utils'

const TicTacToe = () => {

    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);
    const [disabled, setDisabled] = useState({motion: false, count: 0});

    const handleClick = (num: number) => {
        if (winner || cells[num] !== "") return;
        let arr = [...cells];
        if (turn === "X") {
            arr[num] = "X";
            setTurn("O");
        } else {
            arr[num] = "O";
            setTurn("X");
        }
        checkwinner(arr, setWinner);
        setCells(arr);
        if(disabled.count <= 0) setDisabled({motion: true, count: disabled.count + 1})
        if (!arr.includes("") && !winner) setIsDraw(true);
    }

    const handleReset = () => {
        setWinner(null);
        setIsDraw(false);
        setTurn("X")
        setCells(Array(9).fill(""));
        setDisabled({motion: false, count: 0})
    };

    return <div className="tic-tac"> 
                <div className='tic-tac_info'>
                        <div><h1>Tic Tac Toe</h1></div>
                        <div className='motion'>{turn}</div>
                        <div className='tic-tac_random'>  
                            <FormControl disabled={disabled.motion}>
                                <InputLabel id="demo-simple-select-label">First</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={turn}
                                label="motion"
                                onChange={((event: SelectChangeEvent) => setTurn(event.target.value as string))}
                                >
                                  <MenuItem value={'X'}>crosses</MenuItem>
                                  <MenuItem value={'O'}>noughts</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                </div>  
                <div className='tic-tac_field'>
                        <Collapse in={!!winner || isDraw}>
                                <Alert variant="filled" icon={false} severity="success">
                                    {winner ? `Winner is: ${winner}` : isDraw ? "DRAW" : ""}
                                </Alert>
                        </Collapse>
                        <table>
                            <tbody>
                              <tr>
                                  {[0, 1, 2].map(num => <Cell key={num} cells={cells} handleClick={handleClick} num={num} />)}  
                              </tr>
                              <tr>
                                  {[3, 4, 5].map(num => <Cell key={num} cells={cells} handleClick={handleClick} num={num} />)}  
                              </tr>
                              <tr>
                                  {[6, 7, 8].map(num => <Cell key={num} cells={cells} handleClick={handleClick} num={num} />)} 
                              </tr>
                            </tbody>
                        </table>
                        <Button className='reset' onClick={handleReset} variant="outlined">Reset</Button>
                  </div> 
            </div>
}
export default TicTacToe;