//Axios
import Axios from 'axios';
import swal from 'sweetalert';
import modelos from '../paths/modelos';

const funciones = {
    postOP: (datosOp, setActivo,setDatosOp, activo, setDesabilitado, setOpActiva2,data) => {
        try {
            const { color_codigo, linea_numero, modelo_objetivo, numero_op } = data;
            const op = {
                ...datosOp,
                linea_numero: parseInt(linea_numero),
                modelo_objetivo: parseInt(modelo_objetivo),
                color_codigo: color_codigo,
                numero_op: numero_op,
                hora_inicio: new Date().toTimeString()
            }
            setDatosOp(op);
            Axios.post(modelos.getOp, op)
                .then(res => {
                    setOpActiva2(res.data)
                    setActivo({
                        ...activo,
                        ['crear']: true,
                        ['iniciar']: false
                    })
                    setDesabilitado(true)
                }).catch(e => {
                    console.log(e)
                    swal({
                        title: `La Línea N°${datosOp.linea_numero} está ocupada`,
                        icon: 'warning',
                        button: 'OK',
                        dangerMode: true
                    }).then(res => {
                        setActivo({
                            ...activo,
                            ['crear']: false,
                            ['iniciar']: true
                        })
                        setDesabilitado(false)
                    })
                })
        } catch (e) {
            console.log(e.data)
        }
    },

    putOPIniciar: (setActivo,setColor,setOpActiva2,activo,color,opActiva2) =>{
        setActivo({
            ...activo,
            ['pausar']: false,
            ['finalizar']: false
        })
        setColor({
            ...color,
            ['cIniciar'] : 'btn-warning',
            ['cPausar']: ''
        })
        const op = {...opActiva2,estado:'Iniciada'};
        Axios.put(modelos.getOp+`/${op.idop}`,op).then(res =>{
            setOpActiva2(res.data)
        })
    },

    putOPPausar: (setColor,setOpActiva2,color,opActiva2) =>{
        setColor({
            ...color,
            ['cIniciar'] : '',
            ['cPausar'] : 'btn-warning'
        })
        const op = {...opActiva2,estado: 'Pausada'};
        Axios.put(modelos.getOp+`/${op.idop}`,op).then(res =>{
            setOpActiva2(res.data)
        })
    },

    putOPFinalizar: (color,opActiva2,datosOp,setDesabilitado,setColor,setActivo,setOpActiva2,setDatosOp,form,objetivo) =>{
        setDesabilitado(false);
        setColor({
            ...color,
            ['cIniciar'] : '',
            ['cPausar'] : 'btn-warning'
        })
        setActivo({
            crear: false,
            iniciar: true,
            pausar: true,
            finalizar: true
        })
        const op = {...opActiva2,estado: 'Finalizada',hora_fin: new Date().toTimeString(),fecha_fin: new Date().toLocaleDateString()};
        Axios.put(modelos.getOp+`/${op.idop}`,op).then(res =>{
            setOpActiva2('')
            setDatosOp({
                ...datosOp,
                modelo_objetivo: '',
                numero_op: ''
            })
            swal({
                title: `OP con N°${op.numero_op} fué Finalizada con Éxito`,
                icon: 'success',
                button: 'OK'
            }).then(res =>{
                if(res){
                    form.reset();
                    objetivo.value = '';
                }
            })
        })
    }
}

export default funciones;