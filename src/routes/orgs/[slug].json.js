import { query } from "$lib/db"
import linkifier from "$lib/marked/linkifier"
import { marked } from "marked"

export async function get({ params }) {
    const { companies } = await query(`
        companies(where: { slug: "${params.slug}" }) {
            name
            leader {
              name
              image { url }
              slug
            }
            owner  {
              name
              image { url }
              slug
            }
            
            employees  {
              name
              image { url }
              slug
            }
        }  
    `)
    const [company] = companies

    return {
        body: company
    }
}