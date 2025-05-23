import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPostalcode'
})
export class CustomPostalcodePipe implements PipeTransform {
  str: string = "";

  transform(value: unknown, ...args: unknown[]): unknown {
     if(value == '' || value == null || value == undefined)
      return 'N/A'
    else
    {
      this.str = value as string;
      this.str = this.str.replace(/\s/g, "");
      
      const firstSectionStr = this.str.substring(0, 3);
      const lastSectionStr = this.str.substring(3, 6);

      return firstSectionStr.toUpperCase() + " " + lastSectionStr.toUpperCase();
    }
  }

}
