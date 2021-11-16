import data from './data.json';
import User from './components/User.js';
import './App.css';

const users = data.results; 

const userList = users.map(u => (
  <User 
    key={u.name.first}
    name={`${u.name.title} ${u.name.first} ${u.name.last}`}  
    quote={u.quote}  
    image={u.picture.large}  
  />
));

console.log('list', userList);

const App = () => {
  return (
    <div className="columns is-multiline">
     {userList}
    </div>
  );
}

export default App;
