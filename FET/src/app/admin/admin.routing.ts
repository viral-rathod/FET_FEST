import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';


const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        pathMatch: "prefix",
        children: [
            { path: "", component: DashboardComponent },
            { path: "dashboard", component: DashboardComponent },
            { path: "school", component: SchoolComponent },
            { path: "student", component: StudentComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

export const AdminRoutedComponents = [
    AdminComponent,
    DashboardComponent,
    SchoolComponent,
    AddStudentComponent,
    StudentComponent
];
