export default class ServicesOfPost {

    url = 'https://jsonplaceholder.typicode.com/posts'

    async getAllPosts() {
        return await fetch(this.url).then(value => value.json())
    }

    async getPostId (id) {
        return await fetch(`${this.url}/${id}`).then(value => value.json())
    }
}
