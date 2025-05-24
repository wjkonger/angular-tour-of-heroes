import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HookLifecycleComponent } from './hook-lifecycle/hook-lifecycle.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "databinding", component: DatabindingComponent},
    {path: "directive", component: DirectiveComponent},
    {path: "login", component: LoginComponent},
    {path: "hook-lifecycle", component: HookLifecycleComponent},
    {path: "pipe", component: PipeComponent},
    {path: "template-driven-form", component: TemplateDrivenFormComponent},
    {path: "**", component: PageNotFoundComponent}

];
