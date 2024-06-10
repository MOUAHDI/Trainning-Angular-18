import { Pipe, PipeTransform } from "@angular/core";

type Locale = 'en' | 'fr'

type DictWords = {
    [wordId: string]: {
        [locale in Locale]: string
    }
}

const WORDS: DictWords = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}

@Pipe({
    name: 'lang',
    standalone: true
})
export class LangPipe implements PipeTransform {
    transform(wordId: string, locale: Locale): string {
        return WORDS[wordId][locale]
    }
}