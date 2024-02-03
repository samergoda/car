import { createContext, useContext } from 'react'
import Data from './../../src/Data'
const DataProvider = createContext()
function DataContext({children}) {





    return (
        <DataProvider.Provider value={Data}>{children}</DataProvider.Provider>
    )
}

function useData(){
    const context = useContext(DataProvider)
    return context
}
export {DataContext, useData}
