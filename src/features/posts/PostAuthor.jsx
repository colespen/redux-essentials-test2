import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  );

  return (
    <span>
      by {author ?
        <Link to={`/users/${author.id}`}>{author.name}</Link>
        : 'Unknown author'}
    </span>
  );
};