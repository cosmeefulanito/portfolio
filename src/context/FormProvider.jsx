import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const FormContext = createContext()

const FormProvider = ({children}) => {
    const [campos, setCampos] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    })

    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState()

    const handleSubmit = e => {
        e.preventDefault();

        if (Object.values(campos).includes('')) {
            setError("Todos los campos son obligatorios")
            return;
        }
        setError('')
        enviarFormulario()
    }
    

    const enviarFormulario = async () => {
        try {
            setCargando(true)
            const url = 'https://formulario-nodemailer-production.up.railway.app/api/contact'
            const response = await axios.post(url, campos)
            if (response.status === 200) {
                setError('')
                setResultado(response.status)                
                setCargando(false)
            } else {
                setCargando(false)
                setResultado() 
                setError('Error en el servidor')
                throw new Error("An error has occurred");
            }
        } catch (error) {
            setError("Ha ocurrido un error!");
            setCargando(false);
        }
    };

    const handleInput = e => {
        setCampos({
            ...campos,
            [e.target.name] : e.target.value
        })
    }



    return <FormContext.Provider value={{
            handleInput,
            error,
            handleSubmit,
            cargando,
            resultado}}> {children} </FormContext.Provider>
}

export {FormProvider}
export default FormContext