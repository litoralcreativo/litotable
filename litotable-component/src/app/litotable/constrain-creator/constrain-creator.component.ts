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
  DateConstrain,
} from '../configurations/fieldConstriansStyle';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  @Output('result-constrain') result: EventEmitter<FieldConstrianStyle> =
    new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConstrainCreationForm, {
      data: { columns: this.columns },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.result.emit(result);
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
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
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
      if (selected.type == ColumnType.DATE) {
        this.fieldConstrain.constrain = new DateConstrain(
          this.numberConstrainType.MORETHAN,
          [new Date(), new Date()],
          {
            color: '#eee',
            'background-color': '#888',
          }
        );
      }
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
      this.fieldConstrain.constrain.style[field] = value;
    }
    if (!isStyle) {
      switch (field) {
        case 'date-type':
        case 'number-type':
          this.fieldConstrain.constrain.type = parseInt(value.value);
          break;
        case 'number-value':
        case 'number-value1':
          this.fieldConstrain.constrain.values[0] = parseInt(
            value.target.value
          );
          break;
        case 'number-value2':
          this.fieldConstrain.constrain.values[1] = parseInt(
            value.target.value
          );
          break;
        case 'date-value':
        case 'date-value1':
          this.fieldConstrain.constrain.values[0] = new Date(value.value);
          break;
        case 'date-value2':
          this.fieldConstrain.constrain.values[1] = new Date(value.value);
          break;
      }
    }
    this.getFinalText();
  }

  getFinalText() {
    this.finalString = '';
    switch (this.fieldConstrain.type) {
      case ColumnType.INTEGER:
      case ColumnType.FLOAT:
      case ColumnType.FLOAT:
        this.valueType = 'value';
        this.finalString = `that is `;
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

    switch (this.fieldConstrain.type) {
      case ColumnType.INTEGER:
      case ColumnType.FLOAT:
      case ColumnType.CURRENCY:
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
      case ColumnType.DATE:
        switch (this.fieldConstrain.constrain.type) {
          case MesurableConstrainType.EQUALS:
            this.finalString += `equal to ${this.shortDate(
              this.fieldConstrain.constrain.values[0]
            )}`;
            break;
          case MesurableConstrainType.MORETHAN:
            this.finalString += `after ${this.shortDate(
              this.fieldConstrain.constrain.values[0]
            )}`;
            break;
          case MesurableConstrainType.LESSTHAN:
            this.finalString += `before ${this.shortDate(
              this.fieldConstrain.constrain.values[0]
            )}`;
            break;
          case MesurableConstrainType.BETWEEN:
            this.finalString += `between ${this.shortDate(
              this.fieldConstrain.constrain.values[0]
            )} and ${this.shortDate(this.fieldConstrain.constrain.values[1])}`;
            break;
          case MesurableConstrainType.NOTBETWEEN:
            this.finalString += `not between ${this.shortDate(
              this.fieldConstrain.constrain.values[0]
            )} and ${this.shortDate(this.fieldConstrain.constrain.values[1])}`;
            break;
        }

        break;
    }
  }

  shortDate(str: string): string {
    return new Date(str).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  resetValues() {
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
