import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav',
        rootMargin: '0px 0px -40%',
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    // @ts-ignore
    responsiveNavItems.forEach((responsiveNavItem: HTMLElement) => {
      responsiveNavItem.addEventListener('click', () => {
        // @ts-ignore
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          // @ts-ignore
          navbarToggler.click();
        }
      });
    });
  }
}
