
const getAuthorData = (query) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + query)
        .then(result => result.json())
}

const getAuthorPosts = (query) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/?userId=" + query)
        .then(result => result.json())

}


export { getAuthorData, getAuthorPosts };