import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { Frais } from 'src/app/models/frais-inscription';
import { FraisInscriptionService } from 'src/app/shared/service/frais-inscription/frais-inscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-frais-inscription',
  templateUrl: './add-frais-inscription.component.html',
  styleUrls: ['./add-frais-inscription.component.scss']
})
export class AddFraisInscriptionComponent implements OnInit ,OnDestroy {
  constructor(
    private fraisService : FraisInscriptionService,
    private router : Router
  ){}

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

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  save(){
    console.log(this.frais)
    this.fraisService.add(this.frais).subscribe(res=>{
      console.log(res)
      this.frais = new Frais()
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
