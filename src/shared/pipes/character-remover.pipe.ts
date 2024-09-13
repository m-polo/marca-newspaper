import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterRemover',
})
export class CharacterRemoverPipe implements PipeTransform {
  transform(text: string, character: string = ''): string {
    return text.replaceAll(character, '');
  }
}
