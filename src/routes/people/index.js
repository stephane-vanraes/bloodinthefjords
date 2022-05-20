import { query } from "$lib/db"
import linkifier from "$lib/marked/linkifier"
import { marked } from "marked"

export async function get() {
    const { people } = await query(`
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
          description
          name
          personState: person_state
          slug
        }  
    `)

    marked.use({
        extensions: [linkifier]
    })
    people.forEach(person => person.description = marked.parse(person.description))
    
    return {
        body: {
            people: people.sort((a, b) => a.name.localeCompare(b.name))
        }
    }
}