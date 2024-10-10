import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { filter, Subject, takeUntil } from 'rxjs';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  dataRoutes = [
    { routeName: 'Sinh viên', routeLink: 'student', icon: 'groups' },
    { routeName: 'Lớp học', routeLink: 'class', icon: 'school' },
    { routeName: 'Điểm số', routeLink: 'mark', icon: 'description' },
    { routeName: 'Cá nhân', routeLink: 'profile', icon: 'person' },
  ];

  checked = false;


  routeSelected: number = -1;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => {
        this.updateRouteSelected();
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  navigate(index: number) {
    this.router.navigate([this.dataRoutes[index].routeLink]).then();
  }

  updateRouteSelected() {
    const url = this.router.url;
    switch (true) {
      case url.includes('student'):
        this.routeSelected = 0;
        break;
      case url.includes('class'):
        this.routeSelected = 1;
        break;
      case url.includes('mark'):
        this.routeSelected = 2;
        break;
      case url.includes('profile'):
        this.routeSelected = 3;
        break;
      default:
        this.routeSelected = -1;
    }
  }
  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
