import { query } from "$lib/db"
export async function get() {
    const { interests } = await query(`
        interests {
            people {
                    image { 
                        url(
                            transformation: {
                                image: {
                                    resize: {
                                        fit: clip
                                        height: 300
                                        width: 300
                                    }
                                }
                            }
                        )
                    }
                    name
                    personState: person_state
                    slug
            }
        }
    `)
    
    return {
        body: interests[0]
    }
}