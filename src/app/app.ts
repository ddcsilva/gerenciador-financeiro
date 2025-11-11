import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './core/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  template: `
    <app-layout>
      <router-outlet />
    </app-layout>
  `,
})
export class App {}
