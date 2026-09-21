import { WildComponents } from './wild/wild.components';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponents } from './navbar/navbar.components';
import { HomeComponents } from './home/home.components';
import { BlogComponents } from './blog/blog.components';
import path from 'path';
import { PageComponents } from './page/page.components';
import { AboutUsComponents } from './about-us/about-us.components';

export const routes: Routes = [
{path: '', redirectTo:'home', pathMatch:'full' },
{path:'navbar' , component:NavbarComponents},
{path:'home', component:HomeComponents},
{path:'blog', component:BlogComponents},
{path:'blog/:slug', component:PageComponents},
{path:'about-us', component:AboutUsComponents},
{path:'**', component:WildComponents}
]
