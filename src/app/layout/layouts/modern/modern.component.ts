import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-modern',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './modern.component.html',
  styleUrl: './modern.component.scss',
})
export class ModernComponent {}
