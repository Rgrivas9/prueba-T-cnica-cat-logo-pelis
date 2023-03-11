type Show = {
  title: string
  description: string
  programType: string
  images: Image
  releaseYear: number
}
type Image = {
  ['Poster Art']: PosterArt
}
type PosterArt = {
  url: string
  width: number
  height: number
}
export default Show