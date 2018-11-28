import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddBookComponent } from '../add-book/add-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private service: DataService,
    public dialog: MatDialog, public snackBar: MatSnackBar, ) { }
  bookslist;
  book_length;

  ngOnInit() {
    this.getBooksData();
  }

  getBooksData(): void {
    this.service
      .getBookList().subscribe(
      data => this.getBooksList(data),
      error => this.getBooksList(error)
      );
  }
  getBooksList(data) {
    this.bookslist = data;
    console.log(this.bookslist);
    this.book_length = this.bookslist.length;
    console.log(this.book_length);
  }
  eventHandler(event) {
  }


  createEmpDialog() {
    let dialogRef = this.dialog.open(AddBookComponent,
      {
        width: '500px',
        height: '',
        data: 'aman',
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  updateBookDialog(updatedata) {
    let dialogRef = this.dialog.open(UpdateBookComponent,
      {
        width: '500px',
        height: '',
        data: updatedata,
        panelClass:'empDialog',
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  allUpdateBookData(){
    
  }

  deleteEmpDialog(id) {
    let dialogRef = this.dialog.open(DeleteBookComponent,
      {
        width: '400px',
        data: id,
        // panelClass: 'empDialog',
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'object') {
        if (result.status === true) {
          console.log(result)
          for (var i = 0; i < this.bookslist.length; i++) {

            if (this.bookslist[i].book_id === id) {
              this.bookslist.splice(i, 1);
            }
          }
          this.openSnackBar(result.message, 'Dissmiss')
        }
      }
    });
  }


  stopPropagation(event) {
    console.log(event)
    event.stopPropagation()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
}
