import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-modern',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './modern.component.html',
  styleUrl: './modern.component.scss',
})
export class ModernComponent {}
