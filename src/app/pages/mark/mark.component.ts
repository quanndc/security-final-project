import { Component } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material/material.module';
import {CommonModule, NgForOf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mark',

  standalone: true,
  imports: [
    MaterialModule,
    NgForOf,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './mark.component.html',
  styleUrl: './mark.component.scss'
})
export class MarkComponent {
  // Tìm kiếm
  searchCriteria = {
    studentId: '',
    name: '',
    class: '',
    semester: '',
    averageScore: null,
  };

  // Danh sách lớp và học kỳ
  classes = ['Xác suất thống kê', 'Kinh tế học', 'Lập trình Java'];
  semesters = ['Học kỳ 1', 'Học kỳ 2', 'Học kỳ 3'];

  // Cột hiển thị trong bảng
  displayedColumns: string[] = [
    'stt',
    'studentId',
    'name',
    'class',
    'semester',
    'averageScore',
    'actions',
  ];

  // Dữ liệu gốc (tất cả sinh viên)
  students = [
    {
      studentId: '22113376',
      name: 'Đinh Trung Sơn',
      class: 'Xác suất thống kê',
      semester: 'Học kỳ 1',
      averageScore: 8.5,
    },
    {
      studentId: '22113377',
      name: 'Nguyễn Văn A',
      class: 'Kinh tế học',
      semester: 'Học kỳ 2',
      averageScore: 7.0,
    },
    {
      studentId: '22113378',
      name: 'Trần Văn B',
      class: 'Lập trình Java',
      semester: 'Học kỳ 3',
      averageScore: 9.0,
    },
  ];

  // Dữ liệu hiển thị (sau khi tìm kiếm hoặc lọc)
  dataSource = [...this.students];

  // Tìm kiếm dựa trên tiêu chí
  searchScores() {
    this.dataSource = this.students.filter((student) => {
      const matchStudentId = this.searchCriteria.studentId
        ? student.studentId
          .toLowerCase()
          .includes(this.searchCriteria.studentId.toLowerCase())
        : true;

      const matchName = this.searchCriteria.name
        ? student.name
          .toLowerCase()
          .includes(this.searchCriteria.name.toLowerCase())
        : true;

      const matchClass = this.searchCriteria.class
        ? student.class === this.searchCriteria.class
        : true;

      const matchSemester = this.searchCriteria.semester
        ? student.semester === this.searchCriteria.semester
        : true;

      const averageScore = this.searchCriteria.averageScore !== null
        ? student.averageScore === +this.searchCriteria.averageScore
        : true;


      return matchStudentId && matchName && matchClass && matchSemester && averageScore;
    });

    console.log('Search Results:', this.dataSource);
  }

  // Các chức năng khác
  viewScore(row: any) {
    console.log('Viewing score for:', row);
  }

  editScore(row: any) {
    console.log('Editing score for:', row);
  }

  deleteScore(studentId: string) {
    this.dataSource = this.dataSource.filter(
      (student) => student.studentId !== studentId
    );
    this.students = this.students.filter(
      (student) => student.studentId !== studentId
    );
    console.log('Deleted student with ID:', studentId);
  }
}
