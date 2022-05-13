import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuitPipe } from './pipes/cuit.pipe';
import { LitotableComponent } from './litotable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { PhonePipe } from './pipes/phone.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  LitoColorPickerComponent,
  DialogColorPicker,
} from './lito-color-picker/lito-color-picker.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {
  ConstrainCreatorComponent,
  ConstrainCreationForm,
} from './constrain-creator/constrain-creator.component';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    CuitPipe,
    PhonePipe,
    LitotableComponent,
    LitoColorPickerComponent,
    DialogColorPicker,
    ConstrainCreatorComponent,
    ConstrainCreationForm,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    MatSliderModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    DragDropModule,
    MatSidenavModule,
  ],
  exports: [LitotableComponent],
})
export class LitotableModule {}
