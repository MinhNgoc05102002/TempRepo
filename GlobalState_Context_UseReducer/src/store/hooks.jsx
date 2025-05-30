import { useContext } from 'react'
import Context from './Context';

export const useStore = () => {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]

    // co nghia la nhu nay 
    // return useContext(Context)
}
