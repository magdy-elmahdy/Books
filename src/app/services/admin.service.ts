import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // baseURL:any='https://245d-197-36-192-67.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:5678/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }

  // Add School
  AddSchool(Model:any){
    return this._HttpClient.post(this.baseURL+'Schools/AddSchool',Model, this.ConfigPost)
  }

  // Get All Schools
  getAllSchools(){
    return this._HttpClient.get(this.baseURL+'Schools/GetAll',this.configGet)
  }

  // Get All Parents
  getAllParents(){
    return this._HttpClient.get(this.baseURL+'Parent/GetAllParent',this.configGet)
  }

  //delete Parent 
  deleteParentById(id:any){
    return this._HttpClient.delete(this.baseURL+'Parent/DeleteParentByID?id='+id)
  }
  getKidsByParentId(id:any){
    return this._HttpClient.get(this.baseURL+'Kids/GetKidsByParentId?parentId='+id,this.configGet)
  }

  // Get All Kids
  getAllKids(){
    return this._HttpClient.get(this.baseURL+'Kids/GetAllKids',this.configGet)
  }

  //delete Kid 
  deleteKidById(id:any){
    return this._HttpClient.delete(this.baseURL+'Kids/DeleteKid?id='+id)
  }

  //edit Kid 
  editKid(body:any){
    return this._HttpClient.put(this.baseURL+'Kids/EditKids',body)
  }

  //delete School 
  DeleteSchoolById(id:any){
    return this._HttpClient.delete(this.baseURL+'Schools/DeleteSchool?id='+id)
  }

  //edit School 
  editSchool(body:any){
    return this._HttpClient.put(this.baseURL+'Schools/EditSchools',body)
  }

  // Get All Quotaions
  getAllQuotaions(){
    return this._HttpClient.get(this.baseURL+'Quotation/GetAllQuotation', this.configGet)
  }

  // Download file Templete
  public getTempleteFile(){
    return this._HttpClient.get(this.baseURL+'File/DownloadFile',{observe:'response',
    responseType: 'blob',headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")})
  }

  //Upload File
        // Add File To Customer
  UploadFile(id:any,FormData:any){
    return this._HttpClient.post(this.baseURL+'File/uploadAndSaveExcelFile?id='+id,FormData,{responseType: 'text',})
  }

  // Qoutaions Of Parents
  getParentsQuotaionsByFileId(id:any){
  return this._HttpClient.get(this.baseURL+'Quotation/GetQuotatiopnForEveryParent?FileId='+id, this.configGet)
  }

  // Qoutaions Of Parents
  getKidsQuotaionsByFileId(id:any){
  return this._HttpClient.get(this.baseURL+'Quotation/GetQuotaionForEveryKid?FileId='+id, this.configGet)
  }
}
