import * as fs from 'fs'
import FinalShow from '../types/finalShow.type'

const saveLocalImg = async (list: FinalShow[]): Promise<void> => {
  for (const show of list) {
    const response:Response = await fetch(show.data.images['Poster Art'].url)
    const arrayBuffer:ArrayBuffer = await response.arrayBuffer()
    const buffer:Buffer = Buffer.from(arrayBuffer)
    const outputFileName:string =
      show.id < 10 ? `0${show.id}.jpg` : `${show.id}.jpg`
    const filename:string = 'C:\\Users\\rafae\\Desktop\\DEMO Streaming\\BACK\\data\\images\\' + outputFileName
    fs.createWriteStream(filename).write(buffer)
  }
}

export default saveLocalImg
