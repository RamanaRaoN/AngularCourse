import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'check'
})

export class customPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 10) {
            return value.substr(0, 8) + '...';
        }
        else {
            return value;
        }
    }
    
}
