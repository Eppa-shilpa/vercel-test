import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
@Injectable({
  providedIn: 'root'
})
export class CustomPipePipe implements PipeTransform {
  transform(users: any, filterType: string, filterValue: string) {
    if (!filterType && !filterValue) {
      return users;
    }
    return users.filter((obj: { [x: string]: string; }) => obj[filterType] === filterValue)
  }

}
