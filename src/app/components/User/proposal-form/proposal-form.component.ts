import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss']
})
export class ProposalFormComponent {
  parentId:any
  isClicked:boolean=false;
  constructor(private _ActivatedRoute:ActivatedRoute, private _UserService:UserService, private _Router:Router){
    this.parentId=this._ActivatedRoute.snapshot.paramMap.get('id')
  }
  proposalForm:FormGroup=new FormGroup({
    'weight':new FormControl('',[Validators.required]),
    'height':new FormControl('',[Validators.required]),
    'cigarettes':new FormControl(''),
    'shisha':new FormControl(''),
    'ecigarettes':new FormControl(''),
    'vape':new FormControl(''),
    'alcohol':new FormControl(''),
    'psychatric':new FormControl('',[Validators.required]),
    'diabetes':new FormControl('',[Validators.required]),
    'cancer':new FormControl('',[Validators.required]),
    'heart':new FormControl('',[Validators.required]),
    'circulatory':new FormControl('',[Validators.required]),
    'respiratory':new FormControl('',[Validators.required]),
    'digestive':new FormControl('',[Validators.required]),
    'elavated':new FormControl('',[Validators.required]),
    'nervous':new FormControl('',[Validators.required]),
    'musc':new FormControl('',[Validators.required]),
    'other':new FormControl('',[Validators.required]),
    'scuba':new FormControl('',[Validators.required]),
    'jump':new FormControl('',[Validators.required]),
    'gliding':new FormControl('',[Validators.required]),
    'race':new FormControl('',[Validators.required]),
    'fly':new FormControl('',[Validators.required]),
    'horse':new FormControl('',[Validators.required]),
    'bungee':new FormControl('',[Validators.required]),
    'paraselling':new FormControl('',[Validators.required]),
    'roading':new FormControl('',[Validators.required]),
    'decision':new FormControl(''),
    'extra':new FormControl(0),
  })


  getTobacco(event:any){
    if(event.value=='true'){
      $("#tobacoQuestions").show(600);
    }else{
      $("#tobacoQuestions").hide(600);
      this.proposalForm.get('cigarettes')?.setValue('')
      this.proposalForm.get('shisha')?.setValue('')
      this.proposalForm.get('vape')?.setValue('')
      this.proposalForm.get('ecigarettes')?.setValue('')
    }

  }

      // Alcoho Status
  AlcoholStatus(value:any){
      if(value=='true'){
        $("#SpecifyAlcohol").show(400)
      }else{
        $("#SpecifyAlcohol").hide(400)
        this.proposalForm.get('alcohol')?.setValue('')
      }
      
  }

  SubmitProposalForm(){
    this.isClicked=true
    let Model =Object.assign(this.proposalForm.value,
      {parentId:Number(this.parentId)})
    console.log(Model); 
    
    this._UserService.SaveProposal(Model).subscribe(res=>{
    this.isClicked=false
      console.log(res);
      this._Router.navigate(['/QuotaionDetials/'+this.parentId])
      Swal.fire('Good Job!','You replies Added Successfully','success');
    },error=>{
      this.isClicked=false
      if(error.error=="You Must Enter Your Data Again" || error.error=="'Declient' Can not Add"){
        this._Router.navigate(['/FatherForm'])
      }
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
      
    })
  }
  
  
}
