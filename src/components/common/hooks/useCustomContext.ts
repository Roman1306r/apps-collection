import { useContext } from "react";
import { AppContext } from '../../Context/Context'

export function useCustomContext() {
  return useContext(AppContext)
}
export default useCustomContext