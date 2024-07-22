import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { PortfolioDetailsPopupComponent } from '../portfolio-details-popup/portfolio-details-popup.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public portFolios: any;
  constructor(public dialog: MatDialog, private http: HttpClient){

  }
  ngOnInit(): void {
    this.getSkillsDetails();
  }

  getSkillsDetails(){
    this.http.get("assets/testData/projects.json").subscribe(res => {
      this.portFolios = res;
    }, err => {
      this.portFolios = [];
    });
    ;
  }

  viewMoreDetails(title:any) {
    const dialogRef = this.dialog.open(PortfolioDetailsPopupComponent, {
      data: {
        "isFrom": title
      },
      width: '600px',
      height: '400px',
      id: "infoPopup",
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });  
}

}
