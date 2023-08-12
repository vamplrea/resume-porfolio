import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  TechnicalSkills :{ [key: string]: string } = {};
  constructor() { }

  ngOnInit(): void {
    this.TechnicalSkills ={
      'Web Development': "Angular, Spring framework, Spring Boot, HTML5, CSS3, SCSS, RxJs, Flutter",
      'UI Frameworks': "Bootstrap, ngMaterial, Clarity, Servlet(JSP), Thymeleaf",
      'Programing Languages': "JavaScript (ES5, ES6), TypeScript, Java (8), Python, C#",
      'Design Tool': "Figma, Adobe Suite (Photoshop, Illustrator, Indesign)",
      'Testing': "Karma and Jasmine",
      'API Tool': "Postman, Mockoon",
      'Databases': "MySQL, PostgreSQL, MS SharePoint, Firebase",
      'Version Control': "Git, Github",
      'Development methodologies': "Agile/Scrum",
      'Project management tools': "JIRA, Trello",
      'Operating System': "Windows, Mac, Linux",
      'Language': "Proficient in English, Fluency in Vietnamese"
    }
  }
  getSkillKeys() {
    return Object.keys(this.TechnicalSkills);
  }
}
