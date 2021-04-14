const modelos={
    getDefectos : 'https://localhost:44324/api/defecto',
    getColores : 'https://localhost:44324/api/color',
    getLineas : 'https://localhost:44324/api/linea',
    getModelos : 'https://localhost:44324/api/modelo',
    getEmpleados : 'https://localhost:44324/api/empleado',
    getOp : 'https://localhost:44324/api/op',
    getOpDisponibles: 'https://localhost:44324/api/op/opdisponible',
    getAsignacionInspeccion: 'https://localhost:44324/api/asignacion_inspeccion',
    getDefectosObservado: 'https://localhost:44324/api/defecto/defectosobservado',
    getDefectosReproceso: 'https://localhost:44324/api/defecto/defectosreproceso',
    getTurno: 'https://localhost:44324/api/turno'
}

Object.freeze(modelos);
export default modelos;