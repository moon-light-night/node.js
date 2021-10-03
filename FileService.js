import * as uuid from 'uuid'
import * as path from 'path'

class FileService {
     saveFile(picture) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve('static', fileName)
            picture.mv(filePath)
            return fileName
        } catch (error) {
            console.log(error)
        }
    }
}

export default new FileService()