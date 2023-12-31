import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'show-data',
    loadChildren: () => import('./show-data/show-data.module').then( m => m.ShowDataPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'show-data-details/:id',
    loadChildren: () => import('./show-data-details/show-data-details.module').then( m => m.ShowDataDetailsPageModule)
  },
  {
    path: 'register-ii',
    loadChildren: () => import('./register-ii/register-ii.module').then( m => m.RegisterIIPageModule)
  },
  {
    path: 'register3',
    loadChildren: () => import('./register3/register3.module').then( m => m.Register3PageModule)
  },
  {
    path: 'register4',
    loadChildren: () => import('./register4/register4.module').then( m => m.Register4PageModule)
  },
  {
    path: 'register5',
    loadChildren: () => import('./register5/register5.module').then( m => m.Register5PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
