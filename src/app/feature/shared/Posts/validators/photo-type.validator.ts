import { AbstractControl } from "@angular/forms"
import { Observable } from "rxjs"
export const photoType = () => {
   //const file = control.value as File;
   const fileReader = new FileReader();
   console.log("ok")

   return fileReader ? null : { invalidFormat: true }; 
}