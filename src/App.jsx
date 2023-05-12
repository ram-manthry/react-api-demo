import './App.css';
import GithubUser from './auth/GithubProfile';
import FactFinder from './get/FactFinder';
import UserForm from './post/UserForm';

function App() {
  return (
    <div className="App"> 
        <p>Fact Finder</p>
        <FactFinder />

        <hr />

        {/* <p>User Form</p>
        <UserForm />

        <hr />

        <p>Github User Info</p>
        <GithubUser/> */}
    </div>
  );
}

export default App;
