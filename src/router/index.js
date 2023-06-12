import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/documents',
    name: 'documetns',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Documents/DocumentsView.vue')
  },
  {
    path: '/documentsReader',
    name: 'documetnsReader',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Documents/DocumentsReaderView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/MenuView.vue')
  },
  {
    path: '/newDocument',
    name: 'newDocument',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Documents/NewDocumentView.vue')
  },
  {
    path: '/newProject',
    name: 'newProject',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Projects/NewProjectView.vue')
  },
  {
    path: '/newLabel',
    name: 'newLabel',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Labels/NewLabelView.vue')
  },
  {
    path: '/newCategory',
    name: 'newCategory',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Categories/NewCategoryView.vue')
  },
  {
    path: '/prueba',
    name: 'prueba',
    
    component: () => import('../views/pruebaView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Projects/ProjectsView.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Categories/CategoriesView.vue')
  },
  {
    path: '/labels',
    name: 'labels',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Labels/LabelsView.vue')
  }, 
  {
    path: '/projectsReader',
    name: 'projectsReader',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Projects/ProjectsReaderView.vue')
  },
  {
    path: '/categoriesReader',
    name: 'categoriesReader',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Categories/CategoriesReaderView.vue')
  },
  {
    path: '/labelsReader',
    name: 'labelsReader',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Labels/LabelsReaderView.vue')
  },
  {
    path: '/super',
    name: 'super',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/super/SuperView.vue')
  },
  {
    path: '/newUser',
    name: 'newUser',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/super/NewUserView.vue')
  }, 
  {
    path: '/editUser/:id',
    name: 'editUser',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/super/EditUserView.vue')
  }, 
  {
    path: '/signIn',
    name: 'signIn',
    
    component: () => import('../views/worker/SignInView.vue')
  }, 
  {
    path: '/admin',
    name: 'admin',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/admin/AdminView.vue')
  }, 
  {
    path: '/newUserAdmin',
    name: 'newUserAdmin',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/admin/NewUserAdminView.vue')
  }, 
  {
    path: '/editUserAdmin/:id',
    name: 'editUserAdmin',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/admin/EditUserAdminView.vue')
  }, 
  {
    path: '/editProfile/:id',
    name: 'editProfile',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/EditProfileView.vue')
  }, 
  {
    path: '/editDoc/:id',
    name: 'editDoc',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Documents/EditDocView.vue')
  },
  {
    path: '/editCategory/:id',
    name: 'editCategory',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Categories/EditCatView.vue')
  },
  {
    path: '/editLabel/:id',
    name: 'editLabel',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Labels/EditLabView.vue')
  },
  {
    path: '/editProject/:id',
    name: 'editProject',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Projects/EditProjectView.vue')
  },
  {
    path: '/group1',
    name: 'group1',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group1View.vue')
  }, 
  {
    path: '/group2',
    name: 'group2',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group2View.vue')
  }, 
  {
    path: '/group3',
    name: 'group3',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group3View.vue')
  }, 
  {
    path: '/group4',
    name: 'group4',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group4View.vue')
  },
  {
    path: '/group5',
    name: 'group5',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group5View.vue')
  }, 
  {
    path: '/group6',
    name: 'group6',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group6View.vue')
  }, 
  {
    path: '/group7',
    name: 'group7',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group7View.vue')
  }, 
  {
    path: '/group8',
    name: 'group8',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group8View.vue')
  },
  {
    path: '/group9',
    name: 'group9',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group9View.vue')
  }, 
  {
    path: '/group10',
    name: 'group10',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group10View.vue')
  }, 
  {
    path: '/group11',
    name: 'group11',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group11View.vue')
  }, 
  {
    path: '/group12',
    name: 'group12',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group12View.vue')
  }, 
  {
    path: '/group13',
    name: 'group13',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group13View.vue')
  }, 
  {
    path: '/group14',
    name: 'group14',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group14View.vue')
  }, 
  {
    path: '/group15',
    name: 'group15',
    meta: {
      requiresAuth: true, // Esta ruta requiere autenticación
    },
    
    component: () => import('../views/worker/Groups/Group15View.vue')
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Intercepta cada navegación antes de cargar la ruta
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // La ruta requiere autenticación
    if (isAuthenticated) {
      // El usuario está autenticado, permitir la navegación
      next();
    } else {
      // El usuario no está autenticado, redirigir al inicio de sesión
      next({ name: 'home' });
    }
  } else {
    // La ruta no requiere autenticación, permitir la navegación
    next();
  }
});

export default router
