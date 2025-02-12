import './App.css';
import RecipeDetail from './components/recipeDetail/recipeDetail';

import { Route } from 'react-router-dom';
import Home from './components/home/home';
import AddRecipe from './components/createRecipe/createRecipe';
//import NotFound from './components/notFound/notFound';


function App() {
  return (
    <div className="App">    
        <Route exact path={'/'} component={Home}/>
        <Route path={'/create'} component={AddRecipe}/>
        <Route path={'/recipes/:id'} component={RecipeDetail}/>
    </div>
  );
}

export default App;
