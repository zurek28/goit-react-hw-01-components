import css from '../style/FriendsList.module.css';

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

export { FriendListItem, FriendList };
