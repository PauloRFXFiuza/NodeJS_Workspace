import { randomUUID } from "node:crypto"

export class databaseMemory{
    //criando uma chave privada videos
    #videos = new Map()

    /*
    Set e uma array do js que não aceita valores duplicados
    */
    list() {
        return Array.from(this.#videos.entries()).map((videoArray)=>{
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }

        })
    }
    
    create(video){
        const videoId = randomUUID()
        // UUID - Universal Unique ID
        this.#videos.set(videoId, video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}