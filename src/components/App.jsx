import Profile from './Profile';
import user from '../Tema1-json/user.json';

export const App = () => {
  // console.log(user);
  // console.log(user.username);
  // console.log(user.tag);
  // console.log(user.location);
  // console.log(user.avatar);
  // console.log(user.stats);
  // console.log(user.stats.followers);
  // console.log(user.stats.views);
  // console.log(user.stats.likes);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
