const Home = () => import(/* webpackChunkName: "group-foo" */ '../views/home')
const Chart = () => import(/* webpackChunkName: "group-foo" */ '../views/chart')
const Explain = () => import(/* webpackChunkName: "group-foo" */ '../views/explain')
const Food = () => import(/* webpackChunkName: "group-foo" */ '../views/food')
const FoodAdd = () => import(/* webpackChunkName: "group-foo" */ '../views/food_add')
const Login = () => import(/* webpackChunkName: "group-foo" */ '../views/login')
const Register = () => import(/* webpackChunkName: "group-foo" */ '../views/register')
const Set = () => import(/* webpackChunkName: "group-foo" */ '../views/set')
const Shop = () => import(/* webpackChunkName: "group-foo" */ '../views/shop')
const ShopAdd = () => import(/* webpackChunkName: "group-foo" */ '../views/shop_add')
const User = () => import(/* webpackChunkName: "group-foo" */ '../views/user')
const Error = () => import(/* webpackChunkName: "group-foo" */ '../views/error')
const Edit = () => import(/* webpackChunkName: "group-foo" */ '../views/edit')


export default [
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home,
        name:'home'
    },{
        path:'/chart',
        component:Chart,
        name:'chart'
    },{
        path:'/edit',
        component:Edit,
        name:'edit'
    },{
        path:'/error',
        component:Error,
        name:'error'
    },{
        path:'/explain',
        component:Explain,
        name:'explain'
    },{
        path:'/food',
        component:Food,
        name:'food'
    },{
        path:'/food_add',
        component:FoodAdd,
        name:'food_add'
    },{
        path:'/login',
        component:Login,
        name:'login'
    },{
        path:'/register',
        component:Register,
        name:'register'
    },{
        path:'/set',
        component:Set,
        name:'set'
    },{
        path:'/shop',
        component:Shop,
        name:'shop'
    },{
        path:'/shop_add',
        component:ShopAdd,
        name:'shop_add'
    },{
        path:'/user',
        component:User,
        name:'user'
    }
]