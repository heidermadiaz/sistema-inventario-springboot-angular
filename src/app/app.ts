import { Component, signal } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
 
})
export class App {
  protected readonly title = signal('inventario-app');
}
