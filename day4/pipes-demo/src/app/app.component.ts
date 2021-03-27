import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center" class="content">
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
          <!-- https://angular.io/api/common/DatePipe -->
        </div>
        
        <div>
          <h2>currency </h2>
          {{ user.salary | currency: 'asd' }}
        </div>
        
        <div>
            <h2>slice pipe</h2>
            
            {{ title | slice: 0: 3}}
        </div>
        
        <!-- https://angular.io/api?type=pipe -->
        
        
        <div>
            <h2> Custom pipe: absolute</h2>
            {{ num | abs}}
            
        </div>
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
}
