import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Spinner } from '../../components/Spinner';
import { PostAuthor } from "./PostAuthor";
import TimeAgo from './TimeAgo';
import ReactionButtons from "./ReactionButtons";

import { selectAllPosts, fetchPosts } from './postsSlice';

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{
        post.content.length > 93 ?
          post.content.substring(0, 93) + "..."
          :
          post.content
      }
      </p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};


export const PostsList = () => {
  const dispatch = useDispatch();
  // useSelector() hook reads data from store
  // runs whenever store is updated
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }


  return (
    <section className="posts-list">
      {
        (posts.length > 0) ?
          <h2>Posts</h2>
          :
          <h2>It's quiet...</h2>
      }
      {content}
    </section>
  );
};