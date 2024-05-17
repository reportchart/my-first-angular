import { Injectable, inject } from '@angular/core';
import {

  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';

/* @Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
} */



export const RecipesResolver : ResolveFn<any>=

(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot

)  => {

  const recipes = inject(RecipeService).getRecipes();
  if (recipes.length === 0) {


    return inject(DataStorageService).fetchRecipes();
  } else {
    return recipes;
  }




};


