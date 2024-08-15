import {useCallback, useState} from 'react'
import TimerBody from "./TimerBody/TimerBody";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'

const Timer = () => {

    const [settingsTimer, setSettingsTimer] = useState({timer: '5', isStart: true, option: 'seconds'})
    const options = [{id: 1, name: 'seconds'}, {id: 2, name: 'hours'}, {id: 3, name: 'days'}]

    const start = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault()
                if(Number(settingsTimer.timer) == 0) return
                if(settingsTimer.option === 'hours') {
                    let timer = String(Number(settingsTimer.timer) * 3600)
                    setSettingsTimer({...settingsTimer, timer: timer, isStart: false}) 
                } else if (settingsTimer.option === 'days') {
                    let timer = String(Number(settingsTimer.timer) * 86400)
                    setSettingsTimer({...settingsTimer, timer: timer, isStart: false}) 
                } else {
                    setSettingsTimer({...settingsTimer, isStart: false})
                }                
    }, [settingsTimer])

    return <div className="timer">
                {settingsTimer.isStart 
                ? <div className="timer__settings">
                                    <h1>Enter the timer time</h1>
                                    <div className="timer__settings-body">
                                        <TextField fullWidth value={settingsTimer.timer} onChange={(event) => setSettingsTimer({...settingsTimer, timer: event?.target.value})} id="outlined-basic" label={settingsTimer.option} variant="outlined" />
                                        <FormControl className='select' fullWidth>
                                            <InputLabel id="demo-simple-select-label">time</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={settingsTimer.option}
                                            label="time"
                                            onChange={(e: SelectChangeEvent) => setSettingsTimer({...settingsTimer, option: e.target.value as string})}
                                            >
                                                {options.map(o => <MenuItem value={o.name} key={o.id}>{o.name}</MenuItem>)}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <Button fullWidth size='large' onClick={start} variant="outlined">Start</Button>
                            </div>
                : <TimerBody setSettingsTimer={setSettingsTimer} settingsTimer={settingsTimer}  />}
          </div>
}
export default Timer;