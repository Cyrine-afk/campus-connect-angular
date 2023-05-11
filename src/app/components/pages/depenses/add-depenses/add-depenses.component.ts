import { Component, OnInit, OnDestroy, ViewEncapsulation, importProvidersFrom } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/shared/service/depense/depense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-depenses',
  templateUrl: './add-depenses.component.html',
  styleUrls: ['./add-depenses.component.scss']
})
export class AddDepensesComponent implements OnInit , OnDestroy {

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

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  constructor(
    private depenseService :DepenseService,
    private router : Router
  ){

  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  addDepense(){
    console.log()
    this.depenseService.postDepense(this.depense).subscribe(res=>{
      console.log(res)
      this.depense = new Depense()
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
