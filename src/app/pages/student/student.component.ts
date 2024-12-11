import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
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
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})


export class StudentComponent {
  // Dữ liệu mẫu
  classes = ['Xác suất thống kê', 'Lập trình web', 'Toán cao cấp'];
  departments = ['Công nghệ thông tin', 'Kinh tế', 'Xã hội học'];
  studentSearch: any = { studentId: '', name: '', dob: '', class: '', department: '', quickSearch: '' };
  displayedColumns: string[] = ['stt', 'studentId', 'name', 'dob', 'class', 'department', 'actions'];
  dataSource = [
    { studentId: '22113376', name: 'Đinh Trung Sơn', dob: '17/8/2003', class: 'Xác suất thống kê', department: 'Công nghệ thông tin' },
    { studentId: '22113377', name: 'Nguyễn Văn A', dob: '18/9/2002', class: 'Xác suất thống kê', department: 'Kinh tế' },
  ];

  // Biến để lưu sinh viên đang chỉnh sửa
  editingStudent: any = null;

  // Tìm kiếm sinh viên
  searchStudents() {
    const filteredStudents = this.dataSource.filter(student => {
      return (
        (this.studentSearch.studentId ? student.studentId.includes(this.studentSearch.studentId) : true) &&
        (this.studentSearch.name ? student.name.toLowerCase().includes(this.studentSearch.name.toLowerCase()) : true) &&
        (this.studentSearch.class ? student.class === this.studentSearch.class : true) &&
        (this.studentSearch.department ? student.department === this.studentSearch.department : true) &&
        (this.studentSearch.dob ? student.dob === this.studentSearch.dob : true) &&
        (this.studentSearch.quickSearch
          ? Object.values(student).some(value =>
              value.toString().toLowerCase().includes(this.studentSearch.quickSearch.toLowerCase())
            )
          : true)
      );
    });
    this.dataSource = filteredStudents;
  }

  // Thêm mới sinh viên
  addStudent() {
    if (this.studentSearch.studentId && this.studentSearch.name && this.studentSearch.dob) {
      const exists = this.dataSource.some(student => student.studentId === this.studentSearch.studentId);
      if (!exists) {
        this.dataSource.push(this.studentSearch);
        this.dataSource = [...this.dataSource];
        alert('Sinh viên đã được thêm mới!');
        this.studentSearch = { studentId: '', name: '', dob: '', class: '', department: '', quickSearch: '' }; // Reset form
      } else {
        alert('Sinh viên đã tồn tại!');
      }
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  }

  // Mở form chỉnh sửa
  editStudent(student: any) {
    this.editingStudent = { ...student }; // Sao chép thông tin sinh viên vào form chỉnh sửa
  }

  // Lưu thông tin chỉnh sửa
  saveEdit() {
    const index = this.dataSource.findIndex(student => student.studentId === this.editingStudent.studentId);
    if (index !== -1) {
      this.dataSource[index] = this.editingStudent;
      this.dataSource = [...this.dataSource]; // Cập nhật lại bảng
      alert('Thông tin sinh viên đã được cập nhật!');
      this.cancelEdit();
    }
  }

  // Hủy chỉnh sửa
  cancelEdit() {
    this.editingStudent = null; // Đóng form chỉnh sửa
  }

  // Xóa sinh viên
  deleteStudent(studentId: string) {
    this.dataSource = this.dataSource.filter(student => student.studentId !== studentId);
  }

  // Xem chi tiết sinh viên
  viewStudent(student: any) {
    console.log(student);
  }
}

