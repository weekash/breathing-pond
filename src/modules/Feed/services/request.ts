import { GenericParams, Post } from "../../../interfaces/interface"
import Posts from "../../../mock/posts.json"
export function getPosts():Array<Post>{
    return Posts
}

export function loadComments(postId:string,params?:GenericParams){
    // function to get comments of a post
    console.log(postId, params)
}