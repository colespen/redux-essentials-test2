import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserById } from '../users/usersSlice';

export const PostAuthor = ({ userId }) => {
  const author = useSelector(selectUserById);

  return (
    <span>
      by {author ?
        <Link to={`/users/${author.id}`}>{author.name}</Link>
        : 'Unknown author'}
    </span>
  );
};