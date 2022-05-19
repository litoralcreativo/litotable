import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinanciacionDetalle } from 'src/app/models/FinanciacionDetalle.model';

@Component({
  selector: 'app-formulario-creacion',
  templateUrl: './formulario-creacion.component.html',
  styleUrls: ['./formulario-creacion.component.css'],
})
export class FormularioCreacionComponent {
  financiacionForm = new FormGroup({
    cuota: new FormControl(this.data.cuota, [
      Validators.required,
      Validators.min(1),
    ]),
    incremento: new FormControl(this.data.incremento, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  constructor(
    public dialogRef: MatDialogRef<FormularioCreacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FinanciacionDetalle
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
