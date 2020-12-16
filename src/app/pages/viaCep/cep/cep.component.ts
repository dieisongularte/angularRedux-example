import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app-store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedCep } from '../_viaCep-store/viaCep.selectors';
import { GetOneCep } from '../_viaCep-store/viaCep.actions';

@Component({
  selector: 'ngr-character-detail',
  template: `
    <p>
      cep-detail works!
    </p>
  `,
  styles: []
})
export class CepComponent implements OnInit {

  character$ = this.store.pipe(select(selectSelectedCep));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new GetOneCep(this.route.snapshot.params.id));
  }

}