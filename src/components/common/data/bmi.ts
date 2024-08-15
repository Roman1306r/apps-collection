import { DataBMI } from '../types/bmi'


export const bmiInfo: DataBMI[] = [
    {
        id: 1,
        bmi: "16 and less",
        title: 'Pronounced body weight deficiency',
        max: 16,
        min: 0
    },
    {
        id: 2,
        bmi: "16 — 18,5",
        title: 'Insufficient (deficiency) body weight',
        max: 18.5,
        min: 16
    },
    {
        id: 3,
        bmi: "18,5 — 25",
        title: 'Standard',
        max: 25,
        min: 18.5
    },
    {
        id: 4,
        bmi: "25 — 30",
        title: 'Overweight (pre-obesity)',
        max: 30,
        min: 25
    },
    {
        id: 5,
        bmi: "30 — 35",
        title: 'Obesity of the first degree',
        max: 35,
        min: 30
    },
    {
        id: 6,
        bmi: "35 — 40",
        title: 'Obesity of the second degree',
        max: 40,
        min: 35
    },
    {
        id: 7,
        bmi: "40 or more",
        title: 'Obesity of the third degree (morbid)',
        max: 200,
        min: 40
    }
]