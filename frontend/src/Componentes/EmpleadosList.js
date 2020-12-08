import React, {Component} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'

class EmpleadosList extends Component {

    state = {
        empleados: [],
        empleados2: {nombre_empleado: '', apellido_empleado: '', email_empleado: '', rol_id_rol: '', tipoModal: ''},
        modalInsertar: false,
        modalEliminar: false,
    }

    agregarEmpleado = () => {
        fetch('http://localhost:8000/api/empleados/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.empleados2)
        })
        .then( data => data.json()
        .then(this.cargarEmpleados)
        .then(this.modalInsertar())
        ).catch( error => console.error(error))
    }

    cargarEmpleados = () => {
        fetch('http://localhost:8000/api/empleados/', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(data => data.json())
        .then(
            data => {
                this.setState({empleados: data})
            }
        )
        .catch( error => console.error(error))
    }
    inputChanged = event => {
        const emp = this.state.empleados2;
        emp[event.target.name] = event.target.value;
        this.setState({empleados2: emp});
    }

    modalInsertar = () => {
        this.setState({modalInsertar: !this.state.modalInsertar})
    }
    

    render(){
        return(
        <div>
        <h2>Empleados</h2>
        
       <button onClick={this.modalInsertar} className="btn btn-primary">Agregar empleados</button>
       <button onClick={this.cargarEmpleados} className="btn btn-success">Cargar empleados</button>
       <hr></hr>
       <table className="table">
           <thead>
               <tr>
                   <th>Nombre</th>
                   <th>Apellido</th>
                   <th>Email</th>
                   <th>Rol</th>
               </tr>
           </thead>
           <tbody>
           {this.state.empleados.map(empleados => {
                    return(
                        <tr>
                            <td>{empleados.nombre_empleado}</td>
                            <td>{empleados.apellido_empleado}</td>
                            <td>{empleados.email_empleado}</td>
                            <td>{empleados.rol_id_rol}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                {"  "}
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    )
                })}
           </tbody>
       </table>

       <Modal isOpen= {this.state.modalInsertar}>
           <ModalHeader style={{display: 'block'}}>
               <span style={{float: 'right'}}onClick={() => this.modalInsertar()}>x</span>
           </ModalHeader>
           <ModalBody>
        <div className="form-group">
            <label>Nombre:
            <input type="text" name="nombre_empleado"
            className="form-control"
            value={this.state.empleados2.nombre_empleado}
            onChange={this.inputChanged}></input>
            </label>
            <br/>
            <label>
            Apellido:
            <input type="text" name="apellido_empleado"
            className="form-control"
            value={this.state.empleados2.apellido_empleado}
            onChange={this.inputChanged}></input>
            </label>
            <br/>
            <label>
            Email:
            <input type="email" name="email_empleado"
            className="form-control"
            value={this.state.empleados2.email_empleado}
            onChange={this.inputChanged}></input>
            </label>
            <br/>
            <label>
            Rol:
            <input type="text" name="rol_id_rol" 
            className="form-control"
            value={this.state.empleados2.rol_id_rol}
            onChange={this.inputChanged}></input>
            </label>
       </div>
           </ModalBody>
           <ModalFooter>
               <button className="btn btn-success"onClick={this.agregarEmpleado}>Insertar</button>
               <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
           </ModalFooter>
       </Modal>

       <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>Estás seguro de que deseas eliminar a este empleado</ModalBody>
           <ModalFooter>
                <button className="btn btn-success"onClick={this.agregarEmpleado}>Si</button>
                <button className="btn btn-danger" onClick={() => this.modalInsertar()}>No</button>
           </ModalFooter>
       </Modal>
                
                
            </div>
        )
    }

}

export default EmpleadosList
