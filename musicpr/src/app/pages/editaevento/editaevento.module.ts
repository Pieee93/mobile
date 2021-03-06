import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditaeventoPage } from './editaevento.page';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: EditaeventoPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
  declarations: [EditaeventoPage]
})
export class EditaeventoPageModule {}
