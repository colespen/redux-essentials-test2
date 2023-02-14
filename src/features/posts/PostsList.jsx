import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './styles.css';

import { PostAuthor } from "./PostAuthor";
import TimeAgo from '../../components/TimeAgo';

export const PostsList = () => {
  // useSelector() hook reads data from store
  // runs whenever store is updated
  const posts = useSelector(state => state.posts);
  const orderedPosts = posts.slice(1).sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (

    (posts.length > 1) ?
      <article className="post-excerpt" key={post.id}>
        <h3>{post && post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">
          {
            post.content.length > 95 ?
              post.content.substring(0, 95) + "..."
              :
              post.content
          }
        </p>
        <div className="post-footer">
          <PostAuthor userId={post.user} />
          <Link to={`/posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
        </div>
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