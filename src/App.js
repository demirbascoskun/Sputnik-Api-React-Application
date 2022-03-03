import News from "./components/News";
import NewsDetail from './components/NewsDetail'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
		<header>
			<h1><a href="index.html">Programming with Harun</a></h1>
	
		</header>
	
	
		<div id="secwrapper">
	
			<section>
        <Routes>
        <Route path="/" element={<News/>}/>
        <Route path=":id" element={<NewsDetail/>}/>
        </Routes>
			
      

			</section>
		</div>
		<footer>
			<p>Copyright &copy 2012 BoxPress by Youssef Nassim. All Rights Reserved.</p>
		</footer>
	
	
	</div>
  );
}

export default App;
