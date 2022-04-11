import { createContext, useState, useContext } from "react"

const ChangeContext = createContext(null)

export function ChangeContextProvider({ children }) {
  const [petweetsChange, setPetweetsChange] = useState(false)

  const changePetweetState = () => {
    setPetweetsChange(!petweetsChange)
  }

  return (
    <ChangeContext.Provider
      value={{ changePetweetState, petweetsChange, setPetweetsChange }}
    >
      {children}
    </ChangeContext.Provider>
  )
}

export function useChange() {
  return useContext(ChangeContext)
}
