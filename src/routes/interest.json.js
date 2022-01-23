import { query } from "$lib/db"
export async function get() {

    const { interests } = await query(`
        interests {
            people {
                    image { url }
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