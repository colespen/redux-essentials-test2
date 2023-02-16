import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPostByUserId } from './postsSlice';

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  );

  const post = useSelector(state => selectPostByUserId(state, userId));

  return (
    <span>
      by {author ?
        <Link to={`/posts/${post.id}`}>{author.name}</Link>
        : 'Unknown author'}
    </span>
  );
};