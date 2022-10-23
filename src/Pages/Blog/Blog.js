import './Blog.css';
import Post from '../../Post';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostList from '../../PostList';
import purple from '../../assets/purple.jpg';

export default function Blog () {

    const [title, setTitle] = useState('Hello');

    const [posts, setPosts] = useState([
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\ns..."
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore v..."
        }
    ]);

    const [blog, setBlog] = useState(false);

//an array in the useState,
    React.useEffect(() => {
        fetchPosts()
    }, []);

    //React.useEffect(() => {
    //    //console.log('We have a full list of products')
    //}, [posts]);

        const fetchPosts = () => {
//        fetch('https://jsonplaceholder.typicode.com/posts')
//  .then((response) => response.json())
//  .then((json) => console.log(json));
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setPosts(response.data)
        })
    }

    function handleDelete (id) {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    function changeBackground () {
        if (window.scrollY >=80) {
            setBlog(true)
        }
        else {
            setBlog(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    useEffect(() => {
       console.log('use effect ran');
       console.log(posts);
    },[title]);

    return (
       <div className= {blog ? 'container purple' : 'container'}> 
        <div className='post-container'>
        <img className="purple" src={purple} alt="image-banner"/>
            <PostList posts={posts} title="All Posts" handleDelete={handleDelete}/>
        </div>
       </div>     
    )
}

//Gonna create a Postlist so you can reuse the blogs in a new postlist component
//we gonna do that with props