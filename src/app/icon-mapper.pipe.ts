import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconMapper'
})
export class IconMapperPipe implements PipeTransform {

  iconsMap: any = {
    apple: 'mood',
    banana: 'sentiment_neutral',
    strawberry: 'sentiment_very_dissatisfied'
  }

  transform(value: string): unknown {
    return this.iconsMap[value] || 'help';
  }

}
