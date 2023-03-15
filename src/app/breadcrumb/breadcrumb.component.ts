import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  breadcrumbItems!: BreadcrumbItem[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  //   ngOnInit() {
  //   //   this.router.events.pipe(
  //   //     filter(event => event instanceof NavigationEnd),
  //   //     map(() => this.route),
  //   //     map(route => {
  //   //       const breadcrumbs = [];
  //   //       while (route.firstChild) {
  //   //         route = route.firstChild;
  //   //         const label = route.snapshot.data['breadcrumb'];
  //   //         const url = route.snapshot.url.map(segment => segment.path).join('/');
  //   //         if (label && url) {
  //   //           breadcrumbs.push({ label, url });
  //   //         }
  //   //       }
  //   //       return breadcrumbs;
  //   //     })
  //   //   ).subscribe(breadcrumbs => {
  //   //     this.breadcrumbs = breadcrumbs;
  //   //   });
  //   // }
  // }

  ngOnInit(): void {
    // Subscribe to the router events to update the breadcrumb
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });
  }

  updateBreadcrumb(): void {
    // Get the current route's data and URL segments
    const routeData = this.activatedRoute.snapshot.data;
    const urlSegments = this.router.url
      .split('/')
      .filter((segment) => segment !== '');

    // Map the URL segments to breadcrumb items
    this.breadcrumbItems = urlSegments.map((segment, index) => {
      const label: any = segment.replace(/-/g, ' ');
      const route = `/${urlSegments.slice(0, index + 1).join('/')}`;
      return { label, route };
    });

    // Add a breadcrumb item for the current route's data (if it has a title)
    if (routeData && routeData['title']) {
      this.breadcrumbItems.push({ label: routeData['title'] });
    }
  }
}


