import { useSelector } from "react-redux";

export const PostsList = () => {
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