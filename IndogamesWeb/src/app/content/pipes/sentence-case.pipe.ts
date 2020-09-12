import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string): string {
    let array: string[];
    let newStream: string = '';

    array = value.split(' ');
    array[0].replace(array[0], array[0].charAt(0).toUpperCase);
    for (const elem in array) {
      newStream += ' ' + elem;
    }
    return newStream;
  }
}
