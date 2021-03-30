import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';

function App() {
  	return (
    	<div className="app">
			<Sidebar/>
			<Feed/>
			{/* WIDGETS */}

    	</div>
  	);
}

export default App;
