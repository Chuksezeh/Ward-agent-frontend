import React from 'react'
// import CreateTown from './views/AccessRole/Access/CreateTown'

const ContentList = React.lazy(() => import('./views/PostContentComponent/PostContents/ContentList'))
const UserLogin = React.lazy(() => import('./views/pages/login/Login'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AddContent = React.lazy(() => import('./views/PostContentComponent/PostContents/AddContent'))
const PostApplication = React.lazy(() => import('./views/ApplicationControl/form-control/UpdateApplication'))
const ApplicationList = React.lazy(() => import('./views/ApplicationControl/form-control/AppLicationList'))
const UserAccessRole = React.lazy(() => import('./views/AccessRole/Access/Alerts'))
const RoleManagement = React.lazy(() => import('./views/AccessRole/Access/RoleManagement'))
const DefinePermissions = React.lazy(() => import('./views/AccessRole/Access/DefinePermissions'))
const Subscriber = React.lazy(() => import('./views/SubscriberListComponent/Subscriber/SubscriberList'))
const PostUserData = React.lazy(() => import('./views/UserData/PostUserData'))
const VillageList = React.lazy(() => import('./views/UserData/VillageList'))
const AddVillage = React.lazy(() => import('./views/UserData/AddVillage'))
const EditVillage = React.lazy(() => import('./views/UserData/EditVillageInfo'))
const CreateTown = React.lazy(() => import('./views/AccessRole/Access/CreateTown'))
const CreateQuaters = React.lazy(() => import('./views/AccessRole/Access/CreateQuaters'))
const AppRestriction = React.lazy(() => import('./views/ApplicationControl/form-control/AppRestriction'))

const routes = [
  // { path: '/', name: 'Login', element: UserLogin },
  { path: '/dashboard', name: 'dashborad', element: Dashboard },
  { path: '/create-quarters', name: 'Create Quaters', element: CreateQuaters },
  { path: '/create-town', name: 'Create Town', element: CreateTown },
  { path: '/user-access/access', name: 'Access Role', element: UserAccessRole },
  { path: '/user-access/role-management', name: 'RoleManagement', element: RoleManagement },
  { path: '/user-access/define-permission', name: 'Define permissions', element: DefinePermissions },
  { path: '/Subscriber', name: 'Subscribers', element: Subscriber, exact: true },
  { path: '/Subscribers/subscriber-list', name: 'Subscriber list', element: Subscriber },
  { path: '/post-content/content-list', name: 'Content List', element: ContentList },
  { path: '/post-content/add-content', name: 'Add Content', element: AddContent },
  { path: '/application-control/post-application', name: 'Post App', element: PostApplication },
  { path: '/post-user-data', name: 'Post User Data', element: PostUserData },
  { path: '/post-user-data/Village-list', name: 'village list', element: VillageList },
  {
    path: '/post-user-data/add-Village',
    name: 'Add Village',
    element: AddVillage,
  },
  {
    path: '/post-user-data/edit-Village',
    name: 'edit Village',
    element: EditVillage,
  },
  { path: '/application-control/application-list', name: 'Application List', element: ApplicationList },
  {
    path: '/application-control/application-list/app-restriction-list',
    name: 'App Restriction List',
    element: AppRestriction,
  },
]

export default routes
