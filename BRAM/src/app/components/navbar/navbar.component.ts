import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faCalendarCheck, faCalendarXmark, faCircleCheck, faClipboard, faFileText, faQuestionCircle, faTired } from '@fortawesome/free-regular-svg-icons';
import { faAmbulance, faAnchor, faBars, faCalendar, faChild, faClipboardList, faCoffee, faDatabase, faExclamationTriangle, faFireExtinguisher, faFlask, faGear, faHome, faHouseDamage, faMoneyBill, faPeopleCarry, faPeopleGroup, faPeopleRoof, faPersonSwimming, faPhotoVideo, faRightFromBracket, faScaleBalanced, faShower, faSignature, faSliders, faSquareNfi, faSquareXmark, faSwimmingPool, faTachometerAlt, faTrafficLight, faUpDown, faUpload, faUser, faUsers, faUserTie, faWalking, faWarehouse, faWater } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  home = faHome;

  tasks = faCalendar;
  ttoday = faCalendarCheck;
  topen = faCalendarXmark;
  toverview = faCalendarAlt;

  audits = faSignature;
  vens = faTrafficLight;
  swim = faChild;
  omgevingswet = faScaleBalanced;
  zwembad = faSwimmingPool;
  arbo = faPeopleCarry;

  analyse = faFlask;
  apool = faSwimmingPool;
  alegpool = faPersonSwimming;
  aleg = faShower;
  afloor = faWalking;
  aown = faWater;

  calamiteiten = faExclamationTriangle;
  ongevallen = faAmbulance;
  arboongeval = faPeopleCarry;
  incidenten = faFireExtinguisher;
  klachten = faTired;
  defecten = faHouseDamage;

  rapportages = faFileText;
  pva = faCircleCheck;
  logboeken = faClipboardList;

  management = faUserTie;
  expafspr = faQuestionCircle;
  wm = faQuestionCircle;

  naslagwerk = faWarehouse;
  algemeen = faQuestionCircle;
  bent = faQuestionCircle;
  expl = faQuestionCircle;
  finance = faQuestionCircle;
  hrm = faQuestionCircle;
  marketing = faQuestionCircle;
  ict = faQuestionCircle;

  register = faDatabase;

  instellingen = faSliders;
  orggroep = faPeopleRoof;
  gebruikers= faUsers;
  afdelingen = faPeopleGroup;
  other = faQuestionCircle;

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  constructor() { }

  ngOnInit(): void {
  }

}