import { query } from "$lib/db"
export async function get() {

    const { companies } = await query(`
        companies {
          name
          slug
        }  
    `)

    
    return {
        body: {
            orgs: companies.sort((a,b) => a.name.localeCompare(b.name))
        }
    }
}