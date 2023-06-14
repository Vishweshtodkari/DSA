import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor() { }

  ngOnInit() {
    this.initializeAccordion();
  }

  initializeAccordion() {
    const links = $('.link');
    links.on('click', (e:any) => {
      const $el = $(e.currentTarget);
      const $next = $el.next();

      $next.slideToggle();
      $el.parent().toggleClass('open');

      const $accordion = $('#accordion');
      if (!$accordion.data('multiple')) {
        $accordion.find('.submenu').not($next).slideUp().parent().removeClass('open');
      }
    });
  }
}
