import {useState} from 'react';
import {bmiInfo} from "../common/data/bmi";
import { Accordion, AccordionDetails, AccordionSummary, Button, Collapse } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { checkToCorresponds } from '../common/utils/utils'

const BMI = () => {

    const [controlBMI, setControlBMI] = useState({height: 180, weight: 70, result: 0, equality: ''})

    function calculateBMI() {
        if(controlBMI.height === 0 && controlBMI.weight === 0) return 
        let bmi = +(controlBMI.weight / Math.pow(controlBMI.height / 100, 2)).toFixed(1)
        const equality: string = checkToCorresponds(bmi, bmiInfo)
        setControlBMI({height: 0, weight: 0, result: bmi, equality})
    }

    return <div className="bmi"> 
                    <h1>Body Mass Index (BMI) Calculator</h1>
                    <div className="bmi__form">
                        <div className="bmi__form-cont">
                            <label htmlFor="growth">Your height in centimeters <input value={controlBMI.height} min={0} max={300} onChange={(e) => setControlBMI({...controlBMI, height: Number(e.target.value) }) } id="growth" type="number"/></label>
                        </div>
                        <div className="bmi__form-cont">
                            <label htmlFor="weight">Your weight in kilograms <input min={0} max={300} value={controlBMI.weight} onChange={(e) => setControlBMI({...controlBMI, weight: Number(e.target.value) }) } id="weight" type="number"/></label>
                        </div>
                        <Button fullWidth size='large' onClick={calculateBMI} variant="contained"><CalculateIcon /></Button>
                    </div>
                    <Collapse in={!!controlBMI.result}>
                        <div className="bmi__result">
                            <h2>Your BMI: <span>{controlBMI.result}</span></h2>
                            <h3>BMI corresponds to: <span>{controlBMI.equality}</span></h3>
                        </div>
                    </Collapse>
                    <div className="bmi__info">
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <h2>Interpretation of BMI indicators, in accordance with the recommendations of the World Health Organization (WHO)</h2>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{fontWeight: 900}}>BMI</TableCell>
                                                <TableCell sx={{fontWeight: 900}}>Description</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {bmiInfo.map((bmi) => (
                                                <TableRow
                                                    key={bmi.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                    <TableCell component="th" scope="row">
                                                        {bmi.bmi}
                                                    </TableCell>
                                                    <TableCell>{bmi.title}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </div>
            </div>
}
export default BMI;