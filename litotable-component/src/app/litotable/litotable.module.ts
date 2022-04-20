import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuitPipe } from './pipes/cuit.pipe';
import { LitotableComponent } from './litotable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [CuitPipe, LitotableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
  ],
  exports: [LitotableComponent],
})
export class LitotableModule {}
