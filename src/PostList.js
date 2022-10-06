import './PostList.css';

const PostList = ({posts, title, handleDelete, setTitle}) => {
    
    //const posts = props.posts;
    //const title = props.title;
    //const handleDelete = props.handleDelete;
    //const id = props.id;


    //console.log(props, posts);

    return (
        <div className="post-container">
            <h2>{ title }</h2>
            {posts.map((post) => (
                  <div className='post-preview' key={post.id}>
                      <h2>{ post.title }</h2>
                      <p> { post.body }</p>
                      <button onClick={() => handleDelete(post.id)} className='delete-button'>Delete</button>
                      <button onClick={() => setTitle('Isabelle')}>change name</button>
                      <p>{ title }</p>
                  </div>
              ))}
        </div>
    );
}

export default PostList;