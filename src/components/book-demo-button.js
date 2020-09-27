import React from "react"
import ReactModal from "./modal"
import MyForm from "./form"

const DemoButton = () => {
  return (
    <ReactModal
      content={<MyForm formTitle={"Contact Us For A Demo"}></MyForm>}
      buttonStyle="demo-button"
      buttonName="Book a Demo"
    ></ReactModal>
  )
}

export default DemoButton
