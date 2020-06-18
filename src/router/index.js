import Home from '../views/Home.vue'
import Subjects from '../views/Subjects.vue'
import Articles from '../views/Articles.vue'
import SubMenu from '../views/SubMenu.vue'
import Menu from '../views/Menu.vue'
import NotFound from '../views/404.vue'
import Features from '../views/Features.vue'


// C'est dans la constante routes que vous définisez les différentes routes de votre projet
// Chaque route doivent avoir au minimum un path et un component associé
const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Home,
    meta: {description: 'Page introduction'}
  }, {
    path: '/caracteristiques',
    name: 'Caracteristiques',
    component: Features,
    meta: {description: 'Page caractéristique'}
  },
  {
    path: '/menu',
    component: Menu,
    props: true,
    children: [ 
      {
        path: 'sub',
        alias: '',
        component: SubMenu,
        name: 'Menu'
      }
    ]
  },
  {
    path: '/chapitre/:id/:num/:page',
    component: Subjects,
    props: true,
    children: [ 
      {
        path: 'article',
        alias: '',
        component: Articles,
        name: 'Subjects',
        meta: {description: 'Page d\'article'}
      }
    ]
  },
  {
    path: '*',
    component: NotFound,
    meta: {description: 'Page 404'}
  } 
]

export default routes