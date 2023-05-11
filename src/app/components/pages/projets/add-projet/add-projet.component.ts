import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { ProjetService } from 'src/app/shared/service/projet/projet.service';
import { Projet } from 'src/app/models/projet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit , OnDestroy {
  public routes = routes;
  selected="1";
  selected2="1";
  public activeIndex:number=0
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  projet = new Projet()

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  constructor(
    private projetService :ProjetService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.editor = new Editor();
  }
  addProjet(){
    this.projetService.postProjet(this.projet).subscribe(res=>{
      console.log(res)
        this.projet = new Projet()
        this.router.navigateByUrl('pages/projet/list-projet')
    })
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  public onBack(index:number){
    this.activeIndex = index

  }

}
