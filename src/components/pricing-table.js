import React from "react"
import "font-awesome/css/font-awesome.min.css"
import DataTable from "react-data-table-component"

function isFeature(isFeature) {
  if (typeof isFeature !== "boolean") {
    return <p>{isFeature}</p>
  } else {
    if (isFeature) {
      return <i className="fa fa-check-circle isFeature" />
    } else {
      return <i className="fa fa-times-circle notFeature"></i>
    }
  }
}

function transformFeatures(productFeatures){
  return [
    {
      feature: "Feature 1",
      apc: productFeatures["1"].feature1,
      product2: productFeatures["2"].feature1,
      product3: productFeatures["3"].feature1,
    },
    {
      feature: "Feature 2",
      apc: productFeatures["1"].feature2,
      product2: productFeatures["2"].feature2,
      product3: productFeatures["3"].feature2,
    },
    {
      feature: "Feature 3",
      apc: productFeatures["1"].feature3,
      product2: productFeatures["2"].feature3,
      product3: productFeatures["3"].feature3,
    },
    {
      feature: "Feature 4",
      apc: productFeatures["1"].feature4,
      product2: productFeatures["2"].feature4,
      product3: productFeatures["3"].feature4,
    },
  ]

}



const Table = ({ productFeatures }) => {
  const data = transformFeatures(productFeatures)
  const customStyles = {
    header:{
      style:{
        textAlign: 'center',
        fontSize: '5rem',  
        div:{
          width: '100%',
          textAlign: 'center'
        }
      }
    },
    headCells: {
      style: {
        fontSize:'1.8rem',
      },
    },
    cells: {
      style: {
        fontSize:'2rem'
      },
    },
  };

  const columns = [
    {
      name: "Features",
      selector: "feature",
      sortable: true,
      right: true,
      style:{
        fontSize:'1.8rem'
      }
    },
    {
      name: "APC",
      selector: "apc",
      sortable: false,
      center: true,
      cell: row => isFeature(row.apc),
    },
    {
      name: "T2P",
      selector: "product2",
      sortable: false,
      center: true,
      cell: row => isFeature(row.product2),
    },
    {
      name: "CAPS",
      selector: "product3",
      sortable: false,
      center: true,
      cell: row => isFeature(row.product3),
    },
  ]

  return (
    <section className="pricing-table">
      <DataTable
        title={"Features List"}
        striped={true}
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </section>
  )
}

export default Table
