import { Component, Input, OnInit, Output } from '@angular/core';
import { ExperienceItemModel } from '../models/experience-item.model';

@Component({
  selector: 'app-experience-subsection',
  templateUrl: './experience-subsection.component.html',
  styleUrls: ['./experience-subsection.component.scss']
})
export class ExperienceSubsectionComponent implements OnInit {

  @Input() title: string;
  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
    this.workExperience.push(this.eurisExperience);
  }

  workExperience: ExperienceItemModel[] = [];
  education = ['UniCz', 'UniPdLnC', 'UniPdCs', 'HighSchool'];
  // certifications = [];

  eurisExperience: ExperienceItemModel = {
    logo: '../../../assets/EurisLogo.png',
    isWideLogo: true,
    title: 'Euris SpA',
    subtitle: '2019 - present',
    description: `Back-End Web Developer for a leading customer in the insurance industry from 2020 to date. <b>Developing</b> a BFF (Backend For Frontend) to migrate previously existent business logic to a new backend.<br>In charge of the <b>technical analysis</b> of many new features introduced.<br>The <b>technologies and languages</b> used mainly are <b>NodeJS, Typescript, Git</b>.<br><br>Front-End Web Developer for an important platform of banking services from 2019 until late 2020. <b>Development</b> of a number of front-end processes, together with <b>unit testing and documentation</b>.<br>Development of a private npm library to group common elements for the various applications requested.<br>The <b>technologies and languages</b> mainly used have been <b>Angular, Typescript, HTML, CSS, SCSS, Karma and Jasmine, Git.</b>`
  }

}