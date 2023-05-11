import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { ReclamationService } from 'src/app/shared/service/reclamation/reclamation.service';
import { Reclamtion } from 'src/app/models/reclamation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent implements OnInit, OnDestroy {
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

  reclamation = new Reclamtion()

  constructor(
    private reclamationService : ReclamationService,
    private router : Router
  ) { 

  }

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  addReclamation(){
    this.reclamation.idRec = 0
    this.reclamation.contenuRec = this.reclamation.contenuRec.content[0].content[0].text
    console.log(this.reclamation)
    this.reclamationService.postReclamation(this.reclamation).subscribe(res=>{
      this.reclamation = new Reclamtion()
      this.router.navigateByUrl("pages/course/course-list")
    })
  }
  
  public onBack(index:number){
    this.activeIndex = index

  }
  }
