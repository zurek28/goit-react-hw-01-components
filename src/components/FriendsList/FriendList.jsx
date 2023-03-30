import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline}>
        {friend.status}
      </span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
};

const FriendList = ({ children }) => {
  return (
    <>
      <ul className={css.list}>
        <h2>Friends</h2>
        {children}
      </ul>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png',
  name: 'Anonymous',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export { FriendListItem, FriendList };
