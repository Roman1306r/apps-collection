import { useState, useEffect, useCallback} from 'react';
import { passwords } from '../common/data/passwords'
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Checkbox, FormControlLabel, Slider } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createPassword } from '../common/utils/utils'

const Password = () => {

    const [lenghtPassword, setLenghtPassword ] = useState(8)
    const [settings, setSettings] = useState({num: true, special: true, capital: true})
    const [password, setPassword] = useState('')

    useEffect(() => {
        createPassword(lenghtPassword, settings, setPassword)
    }, [])

   return <div className="password">
                    <h1>Generate a password</h1>
                    <div className="password__container">
                            <div className="password__settings">
                                    <div className="password__lenght"> 
                                        <Slider min={4} max={25} onChange={(_e, value) => setLenghtPassword(Number(value))} value={lenghtPassword} aria-label="Default" valueLabelDisplay="auto" />
                                        <label className="password__lenght-label" htmlFor="pass">Password length - <span className="lenghtEl">{lenghtPassword}</span> </label>
                                    </div>
                                    <div className="password__lenghtcheckbox">
                                        <FormControlLabel onChange={() => setSettings({...settings, num: !settings.num})} checked={settings.num} control={<Checkbox color="success" />} label="With numbers" />
                                    </div>
                                    <div className="password__lenghtcheckbox">
                                        <FormControlLabel onChange={() => setSettings({...settings, special: !settings.special})} checked={settings.special} control={<Checkbox color="success" />} label="With special characters" />
                                    </div>
                                    <div className="password__lenghtcheckbox">
                                        <FormControlLabel onChange={() => setSettings({...settings, capital: !settings.capital})} checked={settings.capital} control={<Checkbox color="success" />} label="Capital letters" />
                                    </div>
                            </div>
                            <div className="password__result">
                                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                                        <Tooltip title="Generate">
                                            <Button onClick={() => createPassword(lenghtPassword, settings, setPassword)} ><RefreshIcon /></Button>
                                        </Tooltip>
                                        <Tooltip title="Copy">
                                            <Button onClick={() => navigator.clipboard.writeText(password)} ><ContentCopyIcon /></Button>
                                        </Tooltip>
                                    </ButtonGroup>
                                    <div className="password__res"><h2 className="password__title">{password}</h2></div>    
                            </div>
                    </div>
                    <div className="password__more">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                                <h2 className="password__more-title">Last generated passwords</h2>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="password__array">
                                    {passwords.map((pass, index) => <Tooltip key={index} title="Copy"><Button size='large' variant="outlined" onClick={() => navigator.clipboard.writeText(pass)} className="password__item" >{pass}</Button></Tooltip> )}
                                </div>
                            </AccordionDetails>
                        </Accordion>                      
                    </div>
         </div>
};
export default Password;