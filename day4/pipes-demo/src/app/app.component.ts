import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
   <!--     <div style="text-align:center" class="content">
            <h1>Welcome to {{title}}!</h1>
        </div>
        
        <div>
          <h2>json</h2>
          {{ user | json }}
        </div>
        
        <div>
          <h2>lowercase, uppercase</h2>
          {{ user.firstname | uppercase }} {{ user.lastname | lowercase }}
        </div>

        <div>
          <h2>titlecase</h2>
          {{ user.title | titlecase }}
        </div>

        <div>
          <h2>date</h2>
          {{ user.dateOfBirth | date: 'full': 'PST': 'en-US' | uppercase | lowercase }}
          &lt;!&ndash; https://angular.io/api/common/DatePipe &ndash;&gt;
        </div>
        
        <div>
          <h2>currency </h2>
          {{ user.salary | currency: 'asd' }}
        </div>
        
        <div>
            <h2>slice pipe</h2>
            
            {{ title | slice: 0: 3}}
        </div>
        
        &lt;!&ndash; https://angular.io/api?type=pipe &ndash;&gt;
        
        
        <div>
            <h2> Custom pipe: absolute</h2>
            {{ num | abs}}
            
        </div>-->
        
        <p [innerHTML]="paragraph | highlight: 'lorem' : 'b': 'lightgreen'"></p>
        
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'pipes-demo';

    user = {
        id: 1,
        lastname: "Gipsz",
        firstname: "Jakab",
        title: 'frontend developer',
        dateOfBirth: Date.now(), // Date.now()
        salary: 1000000
    }

    num = 42342342;

    paragraph = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet felis vel libero vulputate fringilla. Aliquam euismod est quam, ac varius dolor luctus sed. Fusce ornare sed libero id laoreet. Donec vitae pellentesque enim. Maecenas justo felis, elementum vitae lorem non, tincidunt vulputate nulla. Nullam condimentum elementum tellus, sed bibendum libero. Donec interdum sit amet dui quis facilisis.
Sed id leo in lacus dictum eleifend posuere non leo. Nam eu nisi rhoncus, aliquet lacus quis, efficitur velit. Quisque odio velit, sollicitudin sed quam ac, posuere fermentum massa. Nulla feugiat eleifend est, a pellentesque odio congue nec. Aliquam elementum justo metus. Maecenas aliquet volutpat libero auctor egestas. Aliquam nec fringilla sapien. Curabitur commodo dapibus congue. Fusce vulputate feugiat finibus. In hac habitasse platea dictumst. Ut lobortis magna felis, sit amet hendrerit libero posuere et. Fusce pulvinar laoreet rhoncus. Aenean nec lacus eu velit viverra accumsan vitae et dolor.
Sed ultrices eu orci ac maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque elementum cursus nisl vel vestibulum. Nunc eleifend ex nisi, id scelerisque nisl placerat at. Quisque consequat odio congue nisl sollicitudin, vitae varius justo egestas. Quisque vel pretium dolor, quis posuere elit. Duis ac fermentum diam. Nullam euismod velit non nunc posuere, nec tempor tellus pellentesque. Nam hendrerit viverra arcu, at ultrices felis ultricies id. Aliquam tempor nec erat at blandit. Vivamus a pretium leo.
Cras feugiat enim a finibus hendrerit. Pellentesque volutpat lacus ut metus eleifend, in condimentum ante faucibus. Maecenas tincidunt elit nisi, et imperdiet leo pellentesque eu. Praesent vitae massa ac mauris egestas eleifend eget vestibulum augue. Phasellus non dictum neque. Cras mollis quam et dui tempus porttitor. Praesent lacinia malesuada fringilla. Sed molestie lacus elit, eget dapibus augue vulputate in. Morbi id volutpat mauris, et egestas augue. Mauris magna augue, tincidunt a mauris sit amet, aliquam vestibulum ligula. Nulla et bibendum justo, vitae efficitur dui. Suspendisse quis malesuada felis. Duis vitae varius lacus, et pulvinar lectus. Vestibulum hendrerit ut augue a tempor. Maecenas hendrerit magna tempus, imperdiet justo eu, dictum dolor.
Maecenas a porttitor tellus. Sed sed leo leo. Donec pretium turpis sit amet aliquam convallis. Morbi nibh nisl, posuere suscipit mollis nec, laoreet eu diam. Etiam in porta urna, et vulputate odio. Aliquam feugiat ornare felis, sit amet condimentum urna. 
    `
}
