import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-css',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss',
})
export class CssComponent {}
