import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(): void {
    const pdfUrl = 'assets/DAVID HUYNH-resume.pdf'; // Update with the actual path to your PDF file
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'DAVID HUYNH-resume.pdf'; // Specify the desired file name for download
    anchor.click();
  }

}
