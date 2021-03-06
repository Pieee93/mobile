import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Evento} from '../../model/evento.model';
import {Observable} from 'rxjs';
import {EventoServiceService} from '../../services/evento.service';
import {UtenteServiceService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {TIPOLOGIA_EVENTO_CROWFOUNDING} from '../../model/evento.model';

@Component({
  selector: 'app-donazione',
  templateUrl: './donazione.page.html',
  styleUrls: ['./donazione.page.scss'],
})
export class DonazionePage implements OnInit {
  private evento$: Observable<Evento>;
  private utenti$: Observable<Utente[]>;

  constructor(private route: ActivatedRoute,
              private eventoService: EventoServiceService,
              private utenteService: UtenteServiceService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.evento$ = this.eventoService.findById(parseInt(params.get('id'), 0));

    });


  }

}
