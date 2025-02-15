import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipesResolver } from '../recipes/recipes-resolver';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../auth/auth.guard';



const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  {
    path: 'recipes', component: RecipesComponent,
    canActivate: [AuthGuard],

  children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id',
     component: RecipeDetailComponent,
     resolve: {data: RecipesResolver}
     },
     { path: ':id/edit',
     component: RecipeEditComponent,
     resolve: {data: RecipesResolver}
     },
  ] },


  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
