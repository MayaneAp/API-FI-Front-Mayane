import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LivrosModel } from 'src/app/model/livrosModel';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {
  model: LivrosModel = new LivrosModel();

  //

  constructor(
    private livrosSrv: LivrosService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.livrosSrv.GetById(id);
    this.model = result.data as LivrosModel;
  }

  async save(): Promise<void> {
    const result = await this.livrosSrv.post(this.model);
    console.log(result)
    if (result.success) {
      this.router.navigateByUrl('/livros');
    }
  }
}
