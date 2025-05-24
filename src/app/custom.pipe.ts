
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {
  str: string = "";

  
  transform(value: unknown, ...args: unknown[]): unknown {

    if(value == '' || value == null || value == undefined)
      return 'N/A'
    else
    {
      this.str = value as string
      
      const areaCodeStr = this.str.substring(0,3);;
      const midSectionStr = this.str.substring(3, 6);
      const lastSectionStr = this.str.substring(6, 10);

      return "(" + areaCodeStr + ")" + midSectionStr + "-" + lastSectionStr;
    }
    
    
  }

}
