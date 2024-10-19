// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from "./components/Home";
// import RecipeDetails from './components/RecipeDetails';
// import Favorites from './components/Favorites';
// import RecipeForm from './components/RecipeForm';


// function App() {
//   return (
//     // <Router>
//     //     {/* <switch> */}
//     //     <Routes>
//     //       <Route path='/' element={<Home></Home>} />
//     //       <Route path='/RecipeDetails' element={<RecipeDetails></RecipeDetails>} />
//     //       <Route path='/Favorites' element={<Favorites></Favorites>} />
//     //       <Route path='/RecipeForm' element={<RecipeForm></RecipeForm>} />
//     //       <Route exact path='*' element = {<h1>404</h1>}/>
//     //     {/* </switch>              */}
//     //     </Routes>
//     // </Router>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
//       <Route path="/Favorites" element={<Favorites />} />
//       <Route path="/RecipeForm" element={<RecipeForm />} />
//       <Route path="*" element={<h1>404</h1>} />
//     </Routes>
//   </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import Favorites from './components/Favorites';
import RecipeForm from './components/RecipeForm';
import { FavoritesProvider } from './components/FavouriteContext'; // Import context provider

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/RecipeForm" element={<RecipeForm />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;

