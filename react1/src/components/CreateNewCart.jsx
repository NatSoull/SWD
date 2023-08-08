import React , {useState} from 'react'
import "../style.css"
import Swal from 'sweetalert2'
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

const CreateNewCart = () => {

  // const inputName = document.querySelector("#inputName")



  const [product , setProduct] = useState([])
  const [inputName , setInputName] = useState()
  const [inputDescription , setInputDescription] = useState()
  console.log(inputName)
  console.log(inputDescription)

  const createNewProduct = () => {
  
  }
  return (
    <div>
      <button onClick={createNewProduct} className='btn btn-success btn-lg' data-bs-toggle="modal" data-bs-target="#createNewProductModal">Create New Product</button>




<div className="modal fade" id="createNewProductModal" tabIndex="-1" aria-labelledby="createNewProductModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="createNewProductModalLabel">Let's Create a new Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <label className='fs-5 form-label'>Product's Image</label>
        <input id='inputImg' onChange={e => console.log(e)} accept='image/*' type="file" className=' ' />
        <br />
        <label className='fs-5 form-label'>Product's Name</label>
        <input id='inputName' onChange={e => setInputName(`"${e.target.value}"`)} type="text" placeholder='Product name...' className=' form-control' />
        <br />
        <label className='fs-5'>Description</label>
        <input id='inputDescription' onChange={e => setInputDescription(`"${e.target.value}"`)} type="text" placeholder='description' className=' form-control' />
        <br />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default CreateNewCart
