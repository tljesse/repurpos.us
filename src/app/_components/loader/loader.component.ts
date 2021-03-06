import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs/subscription';

import { LoaderStateService } from '../../_services/loader-state.service';
import { LoaderState } from '../../_models/index';

@Component({
  selector: 'http-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show: number = 0;
  private subscription: Subscription;

  constructor(private loaderService: LoaderStateService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
