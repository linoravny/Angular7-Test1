import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'custum' 
})
export class custumPipe implements PipeTransform{
    transform(value: any, args?: any): any {
        //TO DO.....
        return true;
    }
}