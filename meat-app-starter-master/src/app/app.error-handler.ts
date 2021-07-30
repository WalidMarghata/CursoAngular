import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

export class ErrorHandler {
  static handleError(error: Response | any){
    let errorMessage: string
    if (error instanceof Response){
      errorMessage = `Erro ${error.status} ap acessar a url ${error.url} - ${error.statusText}`
    }else{
      errorMessage = error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
  }
}
