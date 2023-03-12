import { createContext, useState } from 'react'
import { useContext } from 'react'

export type Props = {
  children: React.ReactNode
}
export type PageContextType = {
  page: string
  setPage: (value: string) => void
}
export const PageContext = createContext<PageContextType>({
  page: 'Home',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPage: () => {},
})
export const usePageContext = () => useContext(PageContext)
export const PageContextProvider = ({ children }: Props): JSX.Element => {
  const [page, setPage] = useState('Home')
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  )
}
