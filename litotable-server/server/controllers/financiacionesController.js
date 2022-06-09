class Financiacion {
  cuota
  alicuotaPisoTotal
  alicuotaPisoCuota
  incremento
  pjeIncrementoGrabado
  alicuotaTechoTotal
  alicuotaTechoCuota
  pjeDescuentoCalculado
  pjeIncrementoEtiq
  alicuotaTotalEtiq
  alicuotaCuotaEtiq
  tipoCliente

  constructor(
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
    alicuotaCuotaEtiq, tipoCliente

  ) {
    this.alicuotaTechoTotal = alicuotaTechoTotal;
    this.cuota = cuota;
    this.alicuotaPisoTotal = alicuotaPisoTotal;
    this.alicuotaPisoCuota = alicuotaPisoCuota;
    this.incremento = incremento;
    this.pjeIncrementoGrabado = pjeIncrementoGrabado;
    this.alicuotaTechoCuota = alicuotaTechoCuota;
    this.pjeDescuentoCalculado = pjeDescuentoCalculado;
    this.pjeIncrementoEtiq = pjeIncrementoEtiq
    this.alicuotaTotalEtiq = alicuotaTotalEtiq
    this.alicuotaCuotaEtiq = alicuotaCuotaEtiq
    this.tipoCliente = tipoCliente
  }
}

const generateData = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    let alicuotaTotalAnterior = 0;

    let cuota = i + 1;
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
      ((alicuotaTechoTotal - alicuotaPisoCuota) / alicuotaTechoTotal) * 100;
    let pjeIncrementoEtiq = Math.random() / 10;
    let alicuotaTotalEtiq =
      alicuotaPisoTotal + (alicuotaPisoTotal * pjeIncrementoEtiq) / 100;
    let alicuotaCuotaEtiq = alicuotaTotalEtiq / cuota;

    let tCliente = Math.round(Math.random())

    const newFD = new Financiacion(
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
      alicuotaCuotaEtiq, tCliente
    );
    arr.push(newFD);
  }
  return arr;
};

const controller = {
  getRandom: (req, res) => {
    let size = req.params.size
    const financiaciones = generateData(size);
    res.json(financiaciones)
  },
  deleteOne: (req, res) => {
    res.json(...generateData(1))
  },
  deleteMultiple: (req, res) => {
    let ids = req.body.ids
    console.log(ids, ids.length);
    let financiaciones = generateData(ids.length);
    for (let i = 0; i < financiaciones.length; i++) {
      financiaciones[i].cuota = ids[i]
    }
    res.json(financiaciones)
  },
  verifyOne: (req, res) => {
    let original = req.body.original
    original.cuota = 99
    res.json(original)
  }
}

module.exports = controller;
