import './Post.css';
import { useState } from 'react';

export default function Post (props) {
    console.log(props);
    return (
        <div className='post'>
         <h2 className="product-title">{props.post.userId}</h2>
         <p className="product-category">{props.post.id}</p>
         <p className="product-price">{props.post.title}</p>

        </div>
    )
}