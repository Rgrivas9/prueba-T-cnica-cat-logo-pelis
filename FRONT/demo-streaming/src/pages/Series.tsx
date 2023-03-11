import { PageContextType, usePageContext } from '../context/page.Context'

const Series = (): React.ReactElement => {
  const { page, setPage }: PageContextType = usePageContext()
  setPage('series')
  return (
    <main>
      <h1>{page}</h1>
    </main>
  )
}
export default Series
