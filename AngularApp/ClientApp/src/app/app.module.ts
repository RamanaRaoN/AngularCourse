import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { firstcomponent } from './FirstCom/First.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameComponent } from './game/game.component';
import { basicdirective } from './basic-directive/basic.directive';
import { betterdirective } from './basic-directive/better.directive';
import { DropdownDirective } from './shared/Dropdown.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
//import { AccountService } from './accounts.service';
//import { LogService } from './Log.service';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { AppRouteModule } from './app-route.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    firstcomponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    EvenComponent,
    OddComponent,
    GameComponent,
    basicdirective,
    betterdirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //])
    AppRouteModule
  ],
  providers: [ShoppingListService],
  //providers: [LogService]
  bootstrap: [AppComponent]
})
export class AppModule { }
