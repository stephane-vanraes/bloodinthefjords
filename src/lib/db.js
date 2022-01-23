import { gql, GraphQLClient } from 'graphql-request'

export async function query(q) {
    const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL)
    const query = gql`{${q}}`    
    const result = await graphcms.request(query)

    return result
}