export default class ServicesOfComments {

    url = 'https://jsonplaceholder.typicode.com/comments'

    async getAllComments () {
        return await fetch(this.url).then(value => value.json())
    }

    async getIdComponent (id) {
        return await fetch(this.url + `/${id}`).then(value => value.json())
    }
}