import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LivroComponent } from './components/livro/livro.component';
import { LivrosComponent } from './components/livros/livros.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"livros", component: LivrosComponent},
  {path:"usuario", component: UsuarioComponent},
  {path:"livro", component: LivroComponent},
  {path:"usuario/:id", component: UsuarioComponent},
  {path:"livro/:id", component: LivroComponent},
  {path:"usuario/novo", component: UsuarioComponent},
  {path:"livro/novo", component: LivroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
