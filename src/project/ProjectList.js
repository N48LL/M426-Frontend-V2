import React from 'react'

import DemoGridProject from './functiones/DataGridProProject'
import ModalDialog from './functiones/ModalDialog'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import '../Styles/main.css'


class ProjectList extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
  }


  /*
  componentDidMount() {
    this.getTableData()
  }

  getTableData() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Acces-Control-Allow-Origin': '*',
      },
    }

    fetch('http://127.0.0.1:8080/api/project/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(...data)
        this.setState({
          rows: data.map((o) => {
            return {
              date: o.date,
              description: o.description,
              id: o.id,
              name: o.name,
              status: o.status,
              coach: o.coach
            }
          })
        })
      }).then(console.log(this.state))
  }
  */


  render() {
    return (
      <div>
        <h2>All Projects</h2>
        <div className="projectTable">
          <DemoGridProject rows={this.state} />
        </div>
        <ModalDialog />
      </div>
    )
  }
}

export default ProjectList
