import Profile from './Profile';
import Statistics from './Statistics';
import user from '../Tema1-json/user.json';
import data from '../Tema1-json/data.json';

export const App = () => {
  // console.log(data.id);
  // console.log(user.username);
  // console.log(user.tag);
  // console.log(user.location);
  // console.log(user.avatar);
  // console.log(user.stats);
  // console.log(user.stats.followers);
  // console.log(user.stats.views);
  // console.log(user.stats.likes);

  // console.log(data);

  return (
    <div
      style={{
        padding: '30px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
