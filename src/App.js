import './App.css';
import './index.css';
import Dashboard from './components/dashboard/Dashboard'
// import Login from './components/login/Login';
import LoginForm from './components/login/LoginForm'
import LoginMain from './components/login/LoginMain'
function App() {
  return (
    <>
    <div className='flex flex-wrap'>
    <LoginMain/>
    <LoginForm/>
    </div>
    {/* <Dashboard/> */}
    </>
  );
}

export default App;
