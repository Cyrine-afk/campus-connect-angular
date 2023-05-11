import { Component, OnInit, OnDestroy, ViewEncapsulation, importProvidersFrom } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/shared/service/depense/depense.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-depenses',
  templateUrl: './edit-depenses.component.html',
  styleUrls: ['./edit-depenses.component.scss']
})
export class EditDepensesComponent implements OnInit , OnDestroy{

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
  depense = new Depense()
  obj : any

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  id:any

  constructor(
    private depenseService :DepenseService,
    private route : ActivatedRoute,
    private router : Router
  ){
    this.id = this.route.snapshot.params['id']
  }
  
  ngOnInit(): void {
    this.editor = new Editor();
    this.usefullyMethode()
  }


  ngOnDestroy(): void {
    this.editor.destroy();
  }

  usefullyMethode(){
    this.depenseService.getDepenseById(this.id).subscribe(res=>{
      console.log(res)
      this.obj = res
      this.depense = this.obj
      
    })
  }

  addDepense(){
    console.log()
    this.depenseService.update(this.depense , this.id).subscribe(res=>{
      console.log(res)
      this.usefullyMethode()
      this.router.navigateByUrl("pages/depense/list-depense")
    })
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  public onBack(index:number){
    this.activeIndex = index

  }


}
