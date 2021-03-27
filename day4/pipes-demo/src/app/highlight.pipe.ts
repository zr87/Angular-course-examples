import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
    name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string, match: string, wrapTag = 'span', highlightColor: string = 'yellow'): SafeHtml {
        const regExp: RegExp = new RegExp(match, "gi");

        return this.sanitizer.bypassSecurityTrustHtml(
            value.replace(regExp, `<${wrapTag} style="background: ${highlightColor}">${match}</${wrapTag}>`)
        )
    }
}
