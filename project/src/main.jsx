import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
//Importing the routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ObjectivePage from '../src/Components/Pages/ObjectivePage/ObjectivePage.jsx';
import ProjectPage from '../src/Components/Pages/ProjectsPage/ProjectsPage.jsx';
import ContactPage from '../src/Components/Pages/ContactPage/ContactPage.jsx'
const router = createBrowserRouter([

{
path: "/",
element: <App/>
},
{
path: "/objective",
element: <ObjectivePage/>
},
{
path: "/projects",
element: <ProjectPage/>
},
{
path: "/contact",
element: <ContactPage/>
}

]);




const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
