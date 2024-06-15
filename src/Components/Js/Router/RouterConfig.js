import HomePage from '../Home/HomePage';
import Vaccines from '../Pets/Vaccines';
import LoginPage from '../Auth/LoginPage';
import CreateAccount from '../Auth/CreateAccount';
import AboutUs from '../Static/AboutUs/AboutUs';
import PetInformation from '../Pets/PetInformation'; 
import FormAdoptPet from '../Pets/FormAdoptPets';
import  AllAdoptionRequest from '../Pets/AllAdoptionRequest';
export const routes = [{
    path: '/',
    element: <HomePage/>
},

{
    path: '/Vaccines',
    element: <Vaccines/>
},
{
    path: '/LoginPage',
    element: <LoginPage/>
},
{
    path: '/CreateAccount',
    element: <CreateAccount/>
},
{
    path:'/AboutUs',
    element: <AboutUs/>
},
{
    path:'/PageWithPet/:id',
    element: <PetInformation/>
},
{
    path:'/FormAdoptPet',
    element: <FormAdoptPet/>
},
{
    path:'/AllAdoptionRequest',
    element: <AllAdoptionRequest/>
}
]
