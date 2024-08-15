import {memo, useEffect, useState} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { ITimerProps } from '../../common/types/timer'
import { Button } from '@mui/material'

const TimerBody = memo(({settingsTimer, setSettingsTimer} : ITimerProps) => {

    const [controlTimer, setControlTimer] = useState({percentage: 0, part: 100 / Number(settingsTimer.timer)})

    function startTimer() {
        let int = setInterval(() => {
            if(Number(settingsTimer.timer) <= 0) {
                clearInterval(int)
                return setSettingsTimer({...settingsTimer, isStart: true, timer: '5'}) 
            } else {
                setControlTimer({...controlTimer, percentage: controlTimer.percentage + controlTimer.part})
                clearInterval(int)  
                return setSettingsTimer({...settingsTimer, timer: String(Number(settingsTimer.timer) - 1)}) 
            }
        }, 1000)
        return int
    }

    useEffect(() => {
        const interval = startTimer()
        return () => clearInterval(interval)
    }, [settingsTimer.timer]);
  
    return (<div className='timer__body'>
                <CircularProgressbar
                    className='progress'
                    value={controlTimer.percentage}
                    text={`${(controlTimer.percentage).toFixed(2)}%`}
                    strokeWidth={2}
                    styles={buildStyles({
                        textColor: "#00deae",
                        pathColor: "#00deae",
                    })}
                />
                <Button onClick={() => setSettingsTimer({...settingsTimer, isStart: true, timer: '5'})} variant="outlined">Reset</Button>
            </div>)
})
export default TimerBody;