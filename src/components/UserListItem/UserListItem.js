import PropTypes from 'prop-types';
import css from './UserListItem.module.css';
import cardImage from '../../images/card-image.png';
import logo from '../../images/go-it.svg';

const UserListItem = ({ user, isFollowing, onClick }) => {
  const { id, avatar, name, tweets, followers } = user;
  const formatter = new Intl.NumberFormat('en-US');

  return (
    <li className={css.item}>
      <img src={cardImage} alt={'background'} className={css.cardImage} />
      <img
        src={logo}
        alt={'logo Go It'}
        width="76"
        height="22"
        className={css.logo}
      />
      <div className={css.avatarLine}> </div>
      <div className={css.avatarHolder}>
        <img
          src={avatar}
          alt={name}
          width="64"
          height="64"
          className={css.avatar}
        />
      </div>

      <p className={css.tweetsText}>{tweets} tweets</p>
      <p className={css.followersText}>
        {formatter.format(followers)} followers
      </p>
      <button
        type="button"
        onClick={() => onClick(id, isFollowing)}
        className={isFollowing ? css.button : css.buttonFollow}
      >
        {isFollowing ? <>Following</> : <>Follow</>}
      </button>
    </li>
  );
};

UserListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default UserListItem;
