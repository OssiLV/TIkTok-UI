import Home from '~/pages/Home';
import Folowing from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

//Custom layouts
import { HeaderOnly } from '~/componnents/Layout';


//None login
export const publicRoutes = [   
    { path: '/', Component: Home},
    { path: '/following', Component: Folowing},
    { path: '/profile', Component: Profile},
    { path: '/search', Component: Search, layout: null},
    { path: '/upload', Component: Upload, layout: HeaderOnly},

]

//With login
export const privateRoutes = [

]