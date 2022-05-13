import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
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
  StringConstrainType,
  StringConstrain,
  StringConstrainObject,
} from '../configurations/fieldConstriansStyle';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ColumnType } from '../decorators/column.decorator';
import { MatAccordion } from '@angular/material/expansion';

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
      maxHeight: '80vh',
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
  stringFormGroup!: FormGroup;
  fieldConstrain: FieldConstrianStyle | any;
  numberConstrainType = MesurableConstrainType;
  stringConstrainType = StringConstrainType;
  finalString: string = '';
  valueType: string = '';
  @ViewChild(MatAccordion) strAccordion!: MatAccordion;

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(
    public dialogRef: MatDialogRef<ConstrainCreationForm>,
    @Inject(MAT_DIALOG_DATA) public data: ConstrainCreationFormData,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.fieldFormGroup = this._formBuilder.group({
      field: ['', Validators.required],
    });
    this.stringFormGroup = this._formBuilder.group({
      startWith: [''],
      startWithToogle: [''],
      includes: [''],
      includesToogle: [''],
      endsWith: [''],
      endsWithToogle: [''],
    });
    this.resetValues();

    this.getFinalText();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFieldSelectorChange(selected: Column) {
    this.resetValues();
    if (selected) {
      this.fieldConstrain.propertyKey = selected.propertyKey;
      this.fieldConstrain.constrainName = selected.name;
      this.fieldConstrain.type = selected.type;

      switch (selected.type) {
        case ColumnType.DATE:
          this.fieldConstrain.constrain = new DateConstrain(
            this.numberConstrainType.MORETHAN,
            [new Date(), new Date()],
            {
              color: '#eee',
              'background-color': '#888',
            }
          );
          break;
        case ColumnType.STRING:
        case ColumnType.PHONE:
        case ColumnType.CUIT:
          this.fieldConstrain.constrain = new StringConstrain({
            color: '#eee',
            'background-color': '#888',
          });
          break;
      }
    }
    this.getFinalText();
  }

  changeConstrainStyle(value: any, field: string) {
    if (field && field != '') {
      this.fieldConstrain.constrain.style[field] = value;
    }
  }

  changeConstrainState(value: any, field: string) {
    switch (field) {
      case 'date-type':
      case 'number-type':
        this.fieldConstrain.constrain.type = parseFloat(value.value);
        break;
      case 'number-value':
      case 'number-value1':
        this.fieldConstrain.constrain.values[0] = parseFloat(
          value.target.value
        );
        break;
      case 'number-value2':
        this.fieldConstrain.constrain.values[1] = parseFloat(
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
      case ColumnType.PHONE:
      case ColumnType.CUIT:
        this.valueType = 'string';
        this.finalString = `that `;
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
      case ColumnType.STRING:
      case ColumnType.CUIT:
      case ColumnType.PHONE:
        for (
          let i = 0;
          i < this.fieldConstrain.constrain.constrainArray.length;
          i++
        ) {
          const strConstr: StringConstrainObject =
            this.fieldConstrain.constrain.constrainArray[i];

          switch (strConstr.type) {
            case StringConstrainType.STARTSWITH:
              this.finalString += `starts width ${strConstr.value}`;
              break;
            case StringConstrainType.CONTAINS:
              this.finalString += `contains ${strConstr.value}`;
              break;
            case StringConstrainType.ENDWITH:
              this.finalString += `ends width ${strConstr.value}`;
              break;
          }
          if (this.fieldConstrain.constrain.constrainArray.length > 1) {
            if (i < this.fieldConstrain.constrain.constrainArray.length - 2)
              this.finalString += ', ';
            if (i == this.fieldConstrain.constrain.constrainArray.length - 2)
              this.finalString += ' and ';
          }
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
    this.stringFormGroup.reset();
    this.fieldConstrain = {
      propertyKey: this.data.columns[0].propertyKey,
      constrainName: 'New Constrain',
      type: ColumnType.INTEGER,
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
    if (this.strAccordion) this.strAccordion.closeAll();
  }

  updateStringConstrain() {
    let values: {
      startWith: any;
      startWithToogle: any;
      includes: any;
      includesToogle: any;
      endsWith: any;
      endsWithToogle: any;
    } = this.stringFormGroup.value;

    this.fieldConstrain.constrain.clearConstrains();
    if (values.startWithToogle && values.startWith)
      this.fieldConstrain.constrain.addConstrain({
        type: StringConstrainType.STARTSWITH,
        value: values.startWith,
      });
    if (values.includesToogle && values.includes)
      this.fieldConstrain.constrain.addConstrain({
        type: StringConstrainType.CONTAINS,
        value: values.includes,
      });
    if (values.endsWithToogle && values.endsWith)
      this.fieldConstrain.constrain.addConstrain({
        type: StringConstrainType.ENDWITH,
        value: values.endsWith,
      });
    this.getFinalText();
  }

  closeDialog() {
    this.dialogRef.close(this.fieldConstrain);
    console.log(this.fieldConstrain.constrain);
  }
}
