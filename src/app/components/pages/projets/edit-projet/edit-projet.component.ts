import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { ProjetService } from 'src/app/shared/service/projet/projet.service';
import { Projet } from 'src/app/models/projet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})
export class EditProjetComponent implements OnInit , OnDestroy {
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
  id : any

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  listeProjet :any

  constructor(
    private projetService :ProjetService,
    private route : ActivatedRoute,
    private router : Router
  ){
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.getAll()
  }
  getAll(){
    this.projetService.getProjet().subscribe(res=>{
      this.listeProjet = res
      this.listeProjet = this.listeProjet.filter((i:any)=>{
        return i.idProjet == this.id
      })
      this.projet = this.listeProjet[0]
    })
  }
 editProjet(){
    this.projetService.putProjet(this.id , this.projet).subscribe(res=>{
      console.log(res)
      this.getAll()
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
