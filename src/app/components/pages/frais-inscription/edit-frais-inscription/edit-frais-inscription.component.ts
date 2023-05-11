import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { Frais } from 'src/app/models/frais-inscription';
import { FraisInscriptionService } from 'src/app/shared/service/frais-inscription/frais-inscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-frais-inscription',
  templateUrl: './edit-frais-inscription.component.html',
  styleUrls: ['./edit-frais-inscription.component.scss']
})

export class EditFraisInscriptionComponent implements OnInit ,OnDestroy {
  constructor(
    private fraisService : FraisInscriptionService , 
    private route : ActivatedRoute,
    private router : Router
  ){
    this.id = this.route.snapshot.params['id']
  }
  id : any
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

  frais = new Frais()
  obj : any

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
    this.getUseMethide()
   
  }

  getUseMethide(){
    this.fraisService.getFraisById(this.id).subscribe(res=>{
      this.obj = res
      this.frais = this.obj
      console.log(this.frais)
    })
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  save(){
    console.log(this.frais)
    this.fraisService.editFrais(this.frais , this.id).subscribe(res=>{
      console.log(res)
      this.getUseMethide()
      this.router.navigateByUrl("pages/frais-inscription/list-frais-inscription")
    })
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  public onBack(index:number){
    this.activeIndex = index

  }


}



