import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: "app-LandingPage",
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <app-navbar></app-navbar>
        <div>
        <h1>SAKURA RAMEN</h1>
        <h2>BEST RAMEN IN TOWN</h2>
        </div>
    </section>`,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {}