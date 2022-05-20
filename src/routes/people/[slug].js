import { query } from "$lib/db"
import linkifier from "$lib/marked/linkifier"
import { marked } from "marked"

export async function get({ params }) {    
    const { people } = await query(`
        people(where: { slug: "${params.slug}" }) {
            description
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
            race
            slug
        }  
    `)
    const [person] = people

    marked.use({
        extensions: [linkifier]
    })
    person.description = marked.parse(person.description)

    return {
        body: person
    }
}