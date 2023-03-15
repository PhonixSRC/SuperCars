import { TitleCasePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [TitleCasePipe],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navigationPath', { read: ElementRef })
  private navigationPath!: ElementRef;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private titleCasePipe: TitleCasePipe
  ) {}

  ngOnInit(): void {}
  // ngAfterViewInit() {
  //   this.router.events.subscribe((val: any) => {
  //     if (val instanceof NavigationEnd) {
  //       let rootPath = '';
  //       let pathUrl = '';
  //       let addText: any = '';

  //       val.urlAfterRedirects
  //         .trim()
  //         .split('/')
  //         .forEach((element: any) => {
  //           element = this.titleCasePipe.transform(element);
  //           if (element === '' || element === 'Home') {
  //             if (this.navigationPath.nativeElement.childNodes.length >= 2) {
  //               this.navigationPath.nativeElement.childNodes.forEach(
  //                 (element: any) => {
  //                   this.renderer.removeChild(
  //                     this.navigationPath.nativeElement,
  //                     element
  //                   );
  //                 }
  //               );
  //             }
  //             this.navigationPath.nativeElement.childNodes.forEach(
  //               (element: any) => {
  //                 this.renderer.removeChild(
  //                   this.navigationPath.nativeElement,
  //                   element
  //                 );
  //               }
  //             );
  //           } else if (element !== '' && rootPath === '') {
  //             rootPath = location.origin.includes('localhost')
  //               ? element
  //               : element; //todo
  //             pathUrl = ' | ' + element;
  //             //pathUrl = element;
  //             const addElement = this.renderer.createElement('a');
  //             addText = this.renderer.createText(pathUrl);
  //             this.renderer.setAttribute(
  //               addElement,
  //               'href',
  //               rootPath.toLowerCase()
  //             );
  //             this.renderer.appendChild(addElement, addText);
  //             this.renderer.appendChild(
  //               this.navigationPath.nativeElement,
  //               addElement
  //             );
  //           } else if (element !== '' && !/^\d+$/.test(element)) {
  //             rootPath =
  //               element == 'edit' ||
  //               element == 'delete' ||
  //               element.includes('?')
  //                 ? location.origin.includes('localhost')
  //                   ? val.urlAfterRedirects
  //                   : val.urlAfterRedirects
  //                 : rootPath + '/' + element; // todo
  //             if (element.includes('?')) {
  //               element = element.substring(0, element.indexOf('?'));
  //             }
  //             pathUrl = ' | ' + element;
  //             const addElement = this.renderer.createElement('a');
  //             addText = this.renderer.createText(pathUrl);
  //             this.renderer.setAttribute(
  //               addElement,
  //               'href',
  //               rootPath.toLowerCase()
  //             );
  //             this.renderer.appendChild(addElement, addText);
  //             this.renderer.appendChild(
  //               this.navigationPath.nativeElement,
  //               addElement
  //             );
  //           }
  //         });
  //     }
  //   });
  // }
}
