import React, { Component } from 'react';

//import axios from 'axios';

class Tables extends Component{ //transforma la clase en componente

    constructor(props){
        super(props);
        this.state = {
            paciente: [],
        }
    }

    // componentDidMount(){ //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
    //     axios.get('https://loapisw.herokuapp.com/api/pacientes/getAll')
    //     .then((response)=>{
    //         this.setState({
    //             ...this.state,
    //             paciente: response.data,
    //         })
    //     })
    // }

    render(){//esto es para que muestre contenido HTML
        const { paciente } = this.state;

        return(//codigo jsx
        <div>
            <table className="table">
            <thead className="bg-info">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Rut</th>
                <th scope="col">Prioridad</th>
                <th scope="col">Diagnóstico</th>
                <th scope="col">Quimioterapia</th>
                <th scope="col">Recuperación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>Otto</td>
                <td>19.977.297-k</td>
                <td>asd</td>
                <td>xd</td>
                <td>asd</td>
                <td>xd</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>2</td>
                <td>Thornton</td>
                <td>12.345.678-9</td>
                <td>qwe</td>
                <td>joa</td>
                <td>qwe</td>
                <td>joa</td>
                </tr>
            </tbody>
            </table>
        </div>
        );
    }
};

export default Tables;