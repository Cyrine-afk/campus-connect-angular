import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { ReclamationService } from 'src/app/shared/service/reclamation/reclamation.service';
import { Reclamtion } from 'src/app/models/reclamation';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent {
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

  id:any

  reclamation = new Reclamtion()
  onj : any = {}

  constructor(
    private reclamationService : ReclamationService,
    private route : ActivatedRoute,
    private http : HttpClient,
    private router : Router
  ) { 
    this.id = this.route.snapshot.params['id']
  }

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
    this.getData()

  }

  getData(){
    this.http.get("http://localhost:8089/reclamation/getReclamation/"+this.id).subscribe(res=>{
      this.onj =res
      console.log(res)
      this.reclamation = this.onj
    })
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  addReclamation(){
    if(this.reclamation.contenuRec){

      this.reclamation.contenuRec = this.reclamation.contenuRec.slice(3 , this.reclamation.contenuRec.length-4)
    }
    console.log(this.reclamation)
    this.reclamationService.updateReclamation(this.reclamation , this.id).subscribe(res=>{

      this.router.navigateByUrl('pages/course/course-list')
    })
  }

  public onBack(index:number){
    this.activeIndex = index

  }

}
