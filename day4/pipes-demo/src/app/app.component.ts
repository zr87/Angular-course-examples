import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center" class="content">
            <h1>Welcome to {{title}}!</h1>
        </div>
        
<!--        <div>-->
<!--          <h2>json</h2>-->
<!--          {{ user }}-->
<!--        </div>-->
<!--        -->
<!--        <div>-->
<!--          <h2>lowercase, uppercase</h2>-->
<!--          {{ user.firstname  }} {{ user.lastname}}-->
<!--        </div>-->

<!--        <div>-->
<!--          <h2>titlecase</h2>-->
<!--          {{ user.title }}-->
<!--        </div>-->

<!--        <div>-->
<!--          <h2>date</h2>-->
<!--          {{ user.dateOfBirth }}-->
<!--          &lt;!&ndash; https://angular.io/api/common/DatePipe &ndash;&gt;-->
<!--        </div>-->
<!--        -->
<!--        <div>-->
<!--          <h2>currency </h2>-->
<!--          {{ user.salary }}-->
<!--        </div>-->
        
        <!-- https://angular.io/api?type=pipe -->
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
}
