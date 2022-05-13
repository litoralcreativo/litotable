import {
  ColumnContentAlignment,
  ColumnType,
  TableColumn,
} from '../litotable/decorators/column.decorator';

const recalcular = (data: FinanciacionDetalle): FinanciacionDetalle => {
  let arr: FinanciacionDetalle;
  let alicuotaTotalAnterior = 0;

  let cuota = data.cuota;
  let alicuotaPisoTotal = data.alicuotaPisoTotal;
  let alicuotaPisoCuota = alicuotaPisoTotal / cuota;
  let incremento =
    alicuotaTotalAnterior == 0
      ? 0
      : (alicuotaPisoTotal / alicuotaTotalAnterior - 1) * 100;
  alicuotaTotalAnterior = alicuotaPisoTotal;
  let pjeIncrementoGrabado = data.pjeIncrementoEtiq / 10;
  let alicuotaTechoTotal =
    alicuotaPisoTotal + (alicuotaPisoTotal * pjeIncrementoGrabado) / 100;
  let alicuotaTechoCuota = alicuotaTechoTotal / cuota;
  let pjeDescuentoCalculado =
    (alicuotaTechoTotal / alicuotaPisoCuota / alicuotaTechoTotal) * 100;
  let pjeIncrementoEtiq = data.pjeIncrementoEtiq;
  let alicuotaTotalEtiq =
    alicuotaPisoTotal + (alicuotaPisoTotal * pjeIncrementoEtiq) / 100;
  let alicuotaCuotaEtiq = alicuotaTotalEtiq / cuota;

  const newFD = new FinanciacionDetalle(
    cuota,
    alicuotaPisoTotal,
    alicuotaPisoCuota,
    incremento,
    pjeIncrementoGrabado,
    alicuotaTechoTotal,
    alicuotaTechoCuota,
    pjeDescuentoCalculado,
    pjeIncrementoEtiq,
    alicuotaTotalEtiq,
    alicuotaCuotaEtiq
  );
  return newFD;
};

export class FinanciacionDetalle {
  @TableColumn({
    columnName: 'Cuota',
    order: 1,
    type: ColumnType.INTEGER,
  })
  cuota: number;

  @TableColumn({
    columnName: 'A. P. Total',
    order: 2,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Alicuota Piso' },
  })
  alicuotaPisoTotal: number;

  @TableColumn({
    columnName: 'A. P. Cuota',
    order: 3,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Alicuota Piso' },
  })
  alicuotaPisoCuota: number;

  @TableColumn({
    columnName: '%',
    order: 4,
    type: ColumnType.FLOAT,
  })
  incremento: number;

  @TableColumn({
    columnName: 'Alic. Incremento',
    order: 5,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Alicuota Techo' },
  })
  pjeIncrementoGrabado: number;

  @TableColumn({
    columnName: 'A. T. Total',
    order: 6,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Alicuota Techo' },
  })
  alicuotaTechoTotal: number;

  @TableColumn({
    columnName: 'A. T. Cuota',
    order: 7,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Alicuota Techo' },
  })
  alicuotaTechoCuota: number;

  @TableColumn({
    columnName: '% Desc.',
    order: 8,
    type: ColumnType.FLOAT,
  })
  pjeDescuentoCalculado: number;

  @TableColumn({
    columnName: 'Etiq. Incremento',
    order: 9,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Etiquetas' },
  })
  pjeIncrementoEtiq: number;

  @TableColumn({
    columnName: 'E. A. Total',
    order: 10,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Etiquetas' },
  })
  alicuotaTotalEtiq: number;

  @TableColumn({
    columnName: 'E. A. Cuota',
    order: 11,
    type: ColumnType.FLOAT,
    columnGroup: { name: 'Etiquetas' },
  })
  alicuotaCuotaEtiq: number;

  constructor(
    cuota?: number,
    alicuotaPisoTotal?: number,
    alicuotaPisoCuota?: number,
    incremento?: number,
    pjeIncrementoGrabado?: number,
    alicuotaTechoTotal?: number,
    alicuotaTechoCuota?: number,
    pjeDescuentoCalculado?: number,
    pjeIncrementoEtiq?: number,
    alicuotaTotalEtiq?: number,
    alicuotaCuotaEtiq?: number
  ) {
    this.cuota = cuota || 0;
    this.alicuotaPisoTotal = alicuotaPisoTotal || 0;
    this.alicuotaPisoCuota = alicuotaPisoCuota || 0;
    this.incremento = incremento || 0;
    this.pjeIncrementoGrabado = pjeIncrementoGrabado || 0;
    this.alicuotaTechoTotal = alicuotaTechoTotal || 0;
    this.alicuotaTechoCuota = alicuotaTechoCuota || 0;
    this.pjeDescuentoCalculado = pjeDescuentoCalculado || 0;
    this.pjeIncrementoEtiq = pjeIncrementoEtiq || 0;
    this.alicuotaTotalEtiq = alicuotaTotalEtiq || 0;
    this.alicuotaCuotaEtiq = alicuotaCuotaEtiq || 0;
  }
}

const generateData = (size: number): FinanciacionDetalle[] => {
  let arr: FinanciacionDetalle[] = [];
  for (let i = 0; i < size; i++) {
    let alicuotaTotalAnterior = 0;

    let cuota = i;
    let alicuotaPisoTotal = Math.random() / 10;
    let alicuotaPisoCuota = alicuotaPisoTotal / cuota;
    let incremento =
      alicuotaTotalAnterior == 0
        ? 0
        : (alicuotaPisoTotal / alicuotaTotalAnterior - 1) * 100;
    alicuotaTotalAnterior = alicuotaPisoTotal;
    let pjeIncrementoGrabado = Math.random() / 10;
    let alicuotaTechoTotal =
      alicuotaPisoTotal + (alicuotaPisoTotal * pjeIncrementoGrabado) / 100;
    let alicuotaTechoCuota = alicuotaTechoTotal / cuota;
    let pjeDescuentoCalculado =
      (alicuotaTechoTotal / alicuotaPisoCuota / alicuotaTechoTotal) * 100;
    let pjeIncrementoEtiq = Math.random() / 10;
    let alicuotaTotalEtiq =
      alicuotaPisoTotal + (alicuotaPisoTotal * pjeIncrementoEtiq) / 100;
    let alicuotaCuotaEtiq = alicuotaTotalEtiq / cuota;

    const newFD = new FinanciacionDetalle(
      cuota,
      alicuotaPisoTotal,
      alicuotaPisoCuota,
      incremento,
      pjeIncrementoGrabado,
      alicuotaTechoTotal,
      alicuotaTechoCuota,
      pjeDescuentoCalculado,
      pjeIncrementoEtiq,
      alicuotaTotalEtiq,
      alicuotaCuotaEtiq
    );
    arr.push(newFD);
  }
  return arr;
};

export { generateData };
