import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Column } from '../column';
import {
  Constrain,
  FieldConstrianStyle,
  NumberConstrain,
  MesurableConstrainType,
} from '../configurations/fieldConstriansStyle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnType } from '../decorators/column.decorator';

export class ConstrainCreationFormData {
  columns: Column[] = [];
}

@Component({
  selector: 'litotable-constrain-creator',
  templateUrl: './constrain-creator.component.html',
  styleUrls: ['./constrain-creator.component.css'],
})
export class ConstrainCreatorComponent implements OnInit {
  @Input('columns') columns: Column[] = [];
  @Output('constrain') result: EventEmitter<Constrain> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConstrainCreationForm, {
      data: { columns: this.columns },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.result.emit(result);
    });
  }
}

@Component({
  selector: 'constrain-creation-form-dialog',
  templateUrl: 'constrain-form.component.html',
  styleUrls: ['./constrain-creator.component.css'],
})
export class ConstrainCreationForm {
  fieldFormGroup!: FormGroup;
  fieldConstrain: FieldConstrianStyle | any;
  numberConstrainType = MesurableConstrainType;
  finalString: string = '';
  valueType: string = '';
  constructor(
    public dialogRef: MatDialogRef<ConstrainCreationForm>,
    @Inject(MAT_DIALOG_DATA) public data: ConstrainCreationFormData,
    private _formBuilder: FormBuilder
  ) {
    this.resetValues();
  }

  ngOnInit() {
    this.fieldFormGroup = this._formBuilder.group({
      field: ['', Validators.required],
    });
    this.getFinalText();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFieldSelectorChange(selected: Column) {
    if (selected) {
      this.fieldConstrain.propertyKey = selected.propertyKey;
      this.fieldConstrain.constrainName = selected.name;
      this.fieldConstrain.type = selected.type;
    }
    this.getFinalText();
  }

  changeConstrainState(
    value: any,
    data: Constrain | any,
    field: string,
    isStyle: boolean = true
  ) {
    if (isStyle && field && field != '') {
      data.style[field] = value;
    }
    if (!isStyle) {
      switch (field) {
        case 'number-type':
          data.type = parseInt(value.value);
          break;
        case 'number-value':
        case 'number-value1':
          data.values[0] = parseInt(value.target.value);
          break;
        case 'number-value2':
          data.values[1] = parseInt(value.target.value);
          break;
      }
    }
    this.getFinalText();
  }

  getFinalText() {
    switch (this.fieldConstrain.type) {
      case ColumnType.INTEGER:
      case ColumnType.FLOAT:
      case ColumnType.FLOAT:
        this.valueType = 'value';
        break;
      case ColumnType.DATE:
        this.valueType = 'date';
        break;
      case ColumnType.STRING:
        this.valueType = 'string';
        break;
      default:
        this.valueType = 'value';
        break;
    }
    this.finalString = `that is `;

    switch (this.fieldConstrain.type) {
      case ColumnType.INTEGER:
      case ColumnType.FLOAT:
      case ColumnType.CURRENCY:
      case ColumnType.DATE:
        switch (this.fieldConstrain.constrain.type) {
          case MesurableConstrainType.EQUALS:
            this.finalString += `equal to ${this.fieldConstrain.constrain.values[0]}`;
            break;
          case MesurableConstrainType.MORETHAN:
            this.finalString += `more than ${this.fieldConstrain.constrain.values[0]}`;
            break;
          case MesurableConstrainType.LESSTHAN:
            this.finalString += `less than ${this.fieldConstrain.constrain.values[0]}`;
            break;
          case MesurableConstrainType.BETWEEN:
            this.finalString += `between ${this.fieldConstrain.constrain.values[0]} and ${this.fieldConstrain.constrain.values[1]}`;
            break;
          case MesurableConstrainType.NOTBETWEEN:
            this.finalString += `not between ${this.fieldConstrain.constrain.values[0]} and ${this.fieldConstrain.constrain.values[1]}`;
            break;
        }
        break;

      default:
        break;
    }
  }

  resetValues() {
    console.log('reset');

    this.fieldConstrain = {
      propertyKey: this.data.columns[0].propertyKey,
      constrainName: 'New Constrain',
      type: this.data.columns[0].type,
      constrain: new NumberConstrain(
        this.numberConstrainType.MORETHAN,
        [0, 0],
        {
          color: '#eee',
          'background-color': '#888',
        }
      ),
      metadata: {
        enable: true,
        trigger: (e: any) => false,
        style: {},
      },
    };
  }

  createConstrain() {}
}
