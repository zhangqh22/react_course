/**
 * Created by win10 on 2018/6/1.
 */
import App from '../App';
import Home from '../pages/home';
import Login from '../pages/login';

let isAuth = sessionStorage.getItem('username');

const routes = [
    {
        path: '/',
        component: App,
        onEnter: function(nextState,replace){
            if(nextState.location.pathname==='/' || !isAuth) {
                replace("/login");
            }
        },
        childRoutes: [
            {
                path: 'home',
                component: Home

            }
        ]
    },
    {
        path: 'login',
        component: Login
    }
];

export default routes;