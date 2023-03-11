import sample from '../../../data/newSample.json'
import Show from '../../scrapping/types/show.Type'
import FinalShow from '../types/finalShow.type'

const newAndOrderData = (): FinalShow[] => {
  return addIdData(orderByTitle())
}
const addIdData = (list: Show[]): FinalShow[] => {
  return list.map((show, index) => ({ data: { ...show }, id: index + 1 }))
}
const orderByTitle = (): Show[] => {
  const orderedSample: Show[] = []
  sample
    .map(show => show.title)
    .sort()
    .forEach(title => {
      orderedSample.push(sample.find(show => show.title == title) as Show)
    })
  return orderedSample
}
export default newAndOrderData
