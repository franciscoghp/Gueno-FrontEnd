import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NbIconModule, NbCardModule, NbInputModule, NbFormFieldModule, NbTooltipModule, NbSpinnerModule } from '@nebular/theme';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NbSpinnerModule
  ]
})
export class PagesModule { }
