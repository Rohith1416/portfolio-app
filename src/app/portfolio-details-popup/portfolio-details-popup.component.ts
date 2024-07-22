import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio-details-popup',
  templateUrl: './portfolio-details-popup.component.html',
  styleUrl: './portfolio-details-popup.component.scss'
})
export class PortfolioDetailsPopupComponent {
  public isFrom: any;
  public skillsData:any;
  constructor(
    public dialogRef: MatDialogRef<PortfolioDetailsPopupComponent>, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.isFrom = this.data?.isFrom;
    }

  ngOnInit(): void {
    this.getSkillsDetails();
    
  }
  getSkillsDetails(){
    this.http.get("assets/testData/skillsDetails.json").subscribe(res => {
      this.skillsData = res;
    });
    ;
  }
  closePopup() {
    this.dialogRef.close();
  }
}
