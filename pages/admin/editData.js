import React from 'react'
import Link from 'next/link'

import { Context, Container } from '../../components/baseComponents'
import styled from 'styled-components'
import firebase from '../../libs/firebase'

const rootRef = firebase.database().ref('golfscore')

const Table = styled.table`
  border-collapse: collapse;
` 

const TableRow = styled.tr`
  border-collapse: collapse;
`

const TableItem = styled.td`
  border-collapse: collapse;
`
class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: ''
    }
  }

  onUpdateformData() {
    const { formData } = this.state

    let dataList = formData.split('\n')
    dataList = dataList.map(row => {
      const rowData = row.split('\t')
      rowData.push(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'])
      return rowData
    })
    dataList.push([])

    rootRef.child('/formData/').set(dataList)
  }

  render() {
    return (
      <div>
        <textarea onChange={(e) => this.setState({ formData: e.target.value})}></textarea>
        <button onClick={() => this.onUpdateformData()}>Update Form Data</button>
      </div>
    )
  }
}

export default Admin
