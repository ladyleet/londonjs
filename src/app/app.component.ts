import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
  <nav>
    <div class="nav-wrapper yellow darken-2">
      <a href="#" class="brand-logo center"><img src="/assets/banana-logo.png"/></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">TEMP</a></li>
        <li><a href="#">TEMP</a></li>
        <li><a href="#">TEMP</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class AppComponent {
  title = 'app works!';
}
