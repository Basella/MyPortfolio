import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/mainpage/mainpage.module').then(
        (m) => m.MainpageModule
      ),
  },
  {
    path: ' ',
    loadChildren: () =>
      import('../app/mainpage/mainpage.module').then(
        (m) => m.MainpageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
