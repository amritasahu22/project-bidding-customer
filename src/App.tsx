import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound/notFound';
import About from './pages/About/about';
import LoginForm from './components/LoginForm/loginForm';
import Profile from './pages/Profile';
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';
import ProjectForm from './components/ProjectForm';
import { getCurrentUser, login } from './services/authService';
import UserContext from './context/userContext';
import { ToastContainer } from 'react-toastify';

function App() {
	login();
	return (
		<UserContext.Provider value={getCurrentUser()}>
			<ToastContainer />
			<Navbar />
			<main
				className='container py-5 my-4'
				style={{ minHeight: '100vh', marginTop: '4rem' }}
			>
				<Switch>
					<Route path='/projects/new' component={ProjectForm} />
					<Route path='/projects/:id' component={ProjectDetails} />
					<Route path='/projects' component={Projects} />
					<Route path='/profile' component={Profile} />
					<Route path='/login' component={LoginForm} />
					<Route path='/about' component={About} />
					<Route path='/not-found' component={NotFound} />
					<Redirect from='/' exact to='/projects' />
					<Redirect to='/not-found' />
				</Switch>
			</main>
			<Footer />
		</UserContext.Provider>
	);
}

export default App;
