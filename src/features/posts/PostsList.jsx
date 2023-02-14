import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PostsList = () => {
  // useSelector() hook reads data from store
  // runs whenever store is updated
  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.slice(1).map(post => (

    (posts.length > 1) ?
      <article className="post-excerpt" key={post.id}>
        <h3>{post && post.title}</h3>
        <p className="post-content">
          {
            post.content.length > 95 ?
              post.content.substring(0, 95) + "..."
              :
              post.content
          }
        </p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
      :
      null
  ));


  return (
    <section className="posts-list">
      {
        (posts.length > 1) ?
          <h2>Posts</h2>
          :
          <h2>It's quiet...</h2>
      }
      {renderedPosts}
    </section>
  );
};