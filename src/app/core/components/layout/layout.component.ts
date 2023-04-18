import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Student } from 'src/app/shared/models';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public studentsList: Student[] = [];

  isLoading: boolean = true;
  studentSubscription: Subscription | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  ngOnDestroy(): void {
    this.studentSubscription?.unsubscribe();
  }

  getStudentList(): void {
    this.studentSubscription = this.studentService.getStudentList().subscribe({
      next: (result) => {
        this.studentsList = result;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

}
