import { PageContextType, usePageContext } from '../context/page.Context'

const Home = (): React.ReactElement => {
  const { page, setPage }:PageContextType = usePageContext()
  setPage('home')
  return (
    <main>
      <h1>{page}</h1>
    </main>
  )
}
export default Home
