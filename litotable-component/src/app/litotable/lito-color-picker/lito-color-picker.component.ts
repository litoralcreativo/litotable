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
import { LitotableColor } from '../configurations/litotable.config';

export interface DialogColorData {
  title: string;
  value: string;
  colors: LitotableColor[];
}

@Component({
  selector: 'app-lito-color-picker',
  templateUrl: './lito-color-picker.component.html',
  styleUrls: ['./lito-color-picker.component.css'],
})
export class LitoColorPickerComponent implements OnInit {
  @Input('colors') colors?: LitotableColor[];
  @Input('content') content: string = 'color';
  @Output('result') result: EventEmitter<string> = new EventEmitter();
  @Output('newColorArray') arr: EventEmitter<LitotableColor[]> =
    new EventEmitter();
  value?: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogColorPicker, {
      width: '400px',
      height: '400px',
      data: { colors: this.colors, value: this.value, title: this.content },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.result.emit(result);
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-color-picker.html',
  styleUrls: ['./lito-color-picker.component.css'],
})
export class DialogColorPicker {
  value: string = '';
  nc: [number, number, number] = [0, 0, 0];
  newColorString = 'rgb(255, 255, 255)';
  fgc: string = '#222';
  mainColors: LitotableColor[] = MAIN_COLORS;
  constructor(
    public dialogRef: MatDialogRef<DialogColorPicker>,
    @Inject(MAT_DIALOG_DATA) public data: DialogColorData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeNewColorValue(color: string, value: any) {
    switch (color) {
      case 'r':
        this.nc[0] = value;
        break;
      case 'g':
        this.nc[1] = value;
        break;
      case 'b':
        this.nc[2] = value;
        break;
    }
    this.newColorString = `rgb(${this.nc[0]}, ${this.nc[1]},${this.nc[2]})`;
    if (this.nc.reduce((a, c) => a + c) / 3 < 180) this.fgc = '#fff';
    else this.fgc = '#222';
  }
}

export const MAIN_COLORS: LitotableColor[] = [
  new LitotableColor('#000000'),
  new LitotableColor('#434343'),
  new LitotableColor('#666666'),
  new LitotableColor('#999999'),
  new LitotableColor('#b7b7b7'),
  new LitotableColor('#cccccc'),
  new LitotableColor('#d9d9d9'),
  new LitotableColor('#efefef'),
  new LitotableColor('#f3f3f3'),
  new LitotableColor('#ffffff'),

  new LitotableColor('#980000'),
  new LitotableColor('#ff0000'),
  new LitotableColor('#ff9900'),
  new LitotableColor('#ffff00'),
  new LitotableColor('#00ff00'),
  new LitotableColor('#00ffff'),
  new LitotableColor('#4a86e8'),
  new LitotableColor('#0000ff'),
  new LitotableColor('#9900ff'),
  new LitotableColor('#ff00ff'),

  new LitotableColor('#e6b8af'),
  new LitotableColor('#f4cccc'),
  new LitotableColor('#fce5cd'),
  new LitotableColor('#fff2cc'),
  new LitotableColor('#d9ead3'),
  new LitotableColor('#d0e0e3'),
  new LitotableColor('#c9daf8'),
  new LitotableColor('#cfe2f3'),
  new LitotableColor('#d9d2e9'),
  new LitotableColor('#ead1dc'),

  new LitotableColor('#dd7e6b'),
  new LitotableColor('#ea9999'),
  new LitotableColor('#f9cb9c'),
  new LitotableColor('#ffe599'),
  new LitotableColor('#b6d7a8'),
  new LitotableColor('#a2c4c9'),
  new LitotableColor('#a4c2f4'),
  new LitotableColor('#9fc5e8'),
  new LitotableColor('#b4a7d6'),
  new LitotableColor('#d5a6bd'),

  new LitotableColor('#cc4125'),
  new LitotableColor('#e06666'),
  new LitotableColor('#f6b26b'),
  new LitotableColor('#ffd966'),
  new LitotableColor('#93c47d'),
  new LitotableColor('#76a5af'),
  new LitotableColor('#6d9eeb'),
  new LitotableColor('#6fa8dc'),
  new LitotableColor('#8e7cc3'),
  new LitotableColor('#c27ba0'),

  new LitotableColor('#a61c00'),
  new LitotableColor('#cc0000'),
  new LitotableColor('#e69138'),
  new LitotableColor('#f1c232'),
  new LitotableColor('#6aa84f'),
  new LitotableColor('#45818e'),
  new LitotableColor('#3c78d8'),
  new LitotableColor('#3d85c6'),
  new LitotableColor('#674ea7'),
  new LitotableColor('#a64d79'),

  new LitotableColor('#85200c'),
  new LitotableColor('#990000'),
  new LitotableColor('#b45f06'),
  new LitotableColor('#bf9000'),
  new LitotableColor('#38761d'),
  new LitotableColor('#134f5c'),
  new LitotableColor('#1155cc'),
  new LitotableColor('#0b5394'),
  new LitotableColor('#351c75'),
  new LitotableColor('#741b47'),

  new LitotableColor('#5b0f00'),
  new LitotableColor('#660000'),
  new LitotableColor('#783f04'),
  new LitotableColor('#7f6000'),
  new LitotableColor('#274e13'),
  new LitotableColor('#0c343d'),
  new LitotableColor('#1c4587'),
  new LitotableColor('#073763'),
  new LitotableColor('#20124d'),
  new LitotableColor('#4c1130'),
];
