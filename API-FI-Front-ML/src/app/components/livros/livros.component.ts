import { LivrosModel } from './../../model/livrosModel';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ILivros } from 'src/app/interfaces/ILivros';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  columns: string[] = ['id', 'title', 'author', 'year'];
  // origem dos dados
  dataSource!: MatTableDataSource<ILivros>;

  constructor(private livrosSrv: LivrosService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bind();
  }

  async bind() {
    const livros = await this.livrosSrv.GetAll();
    this.dataSource = new MatTableDataSource(livros.data);    
  }

  async delete(livros: LivrosModel): Promise<void> {
    const result = await this.livrosSrv.delete(livros.id);
    this.bind();     
    this.router.navigateByUrl('/livros');      
  }

}
