import { memo } from 'react'
import { ICellProps } from '../common/types/ttt'

const Cell = memo(({ num, cells, handleClick }: ICellProps) => {

	const cellValue = cells[num];
	const cellClassName = cellValue ? `cell cell-${cellValue}` : "cell";

	return (<td className={cellClassName} onClick={() => handleClick(num)}>
				{cellValue}
			</td>);
})
export default Cell