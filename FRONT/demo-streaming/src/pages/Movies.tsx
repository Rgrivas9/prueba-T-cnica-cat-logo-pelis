import { PageContextType, usePageContext } from '../context/page.Context'

const Movies = (): React.ReactElement => {
  const { page, setPage }: PageContextType = usePageContext()
  setPage('movies')
  return (
    <main>
      <h1>{page}</h1>
    </main>
  )
}
export default Movies
