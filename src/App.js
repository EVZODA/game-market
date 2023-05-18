import MainRoutes from './components/Usuario/NavbarAll/MainRoutes';
import './css/tailwind.css';
import UseContextEdition from './components/Context/UseContextEdition'
import UserContextCart from './components/Context/UserContextCart';


// Run: npx tailwindcss -i ./src/css/App.css -o ./src/css/tailwind.css --watch
// import {  } from 'flowbite-react'
// import {  } from '@heroicons/react/24/outline'


function App() {
  return (
    <UserContextCart>
<UseContextEdition>
   <MainRoutes>
   </MainRoutes>
   </UseContextEdition>
   </UserContextCart>
   
  );
}

export default App;
