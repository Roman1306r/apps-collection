import { DataBMI } from '../types/bmi'
import { SettingsPassword } from '../types/password'

export function checkLength(string: string, len: number) {
	return string.length > len ? string.slice(0, len) + '...' : string
}

export function createPassword(l: number, settings: SettingsPassword, setPassword: (password: string) => void){
	let symbols = 'abcdefghijklmnopqrstuvwxyz'
	if(settings.num) symbols = symbols + '1234567890';
	if(settings.special) symbols = symbols + '@!#$%&-';
	if(settings.capital) symbols = symbols + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result: string[] = []
	let i = 0
	while (i < l) {
		let randomSymbols = Math.floor(Math.random() * symbols.length)
		result.push(symbols[randomSymbols])
		i++
	}
	setPassword(result.join(''))
}

export function checkToCorresponds(bmi: number, bmiInfo: DataBMI[]) {
	for (let index = 0; index < bmiInfo.length; index++) {
		const element = bmiInfo[index];
		if(bmi >= element.min && bmi < element.max) {
			return element.title
		}    
	}
	return ''
}


export const checkwinner = (arr: string[] | any, setWinner: any) => {

    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo as keyof typeof combos].forEach((pattern) => {
        if (
          arr[pattern[0]] === "" ||
          arr[pattern[1]] === "" ||
          arr[pattern[2]] === ""
        ) {
        } else if (arr[pattern[0]] === arr[pattern[1]] && arr[pattern[1]] === arr[pattern[2]]) {
            setWinner(arr[pattern[0]]);
        }
      });
    }
};