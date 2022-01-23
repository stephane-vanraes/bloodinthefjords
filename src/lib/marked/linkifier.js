export default {
    name: 'link2',
    level: 'inline',    
    start(src) { return src.indexOf('[|') },
    tokenizer(src) {
        const rule = /^(\[\|)(.*?)(\|\])/
        const match = rule.exec(src)
        if (match) {
            return {
                type: 'link2',
                raw: match[0],
                link2: match[2]
            }
        }
    },
    renderer(token) {
        const type = token.link2[0]
        let name = token.link2.substring(1)

        let url = name.toLowerCase().replace(/ /g, '-')

        if (name.startsWith('-')) {
            name = name?.substring(1).split(' ')[0]
            url = url?.substring(1)
        }
        return type == 'p' 
            ? `<a href="/people/${url}">${name}</a>`
            : type == 'o'
            ? `<a href="/orgs/${url}">${name}</a>`
            : name
    }
}