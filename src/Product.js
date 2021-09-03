import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Product() {
  const [prodList, setProdList] = useState([]);
  const [isLoading,setLoading]=useState(true)
  useEffect(async () => {
    try {
      let products = await axios.get(
        "https://611939e08ed292001799eef7.mockapi.io/ProductCrud"
      );
      setProdList([...products.data]);
      console.log(products.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, []);
  let handleDelete=async(id)=>{
let confirm = window.confirm("Do you want to delete?")
if(confirm){
  try {
  
  await axios.delete(`https://611939e08ed292001799eef7.mockapi.io/ProductCrud/${id}`)
  let rowIndex = prodList.findIndex(obj=>obj.id==id);
  prodList.splice(rowIndex,1)
  setProdList([...prodList])
} catch (error) {
  console.log(error)
}
}

  }
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">
        Product<div></div>
      </h1>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      <Link
        to="/product-create"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i> Create Product
      </Link>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            {
              isLoading ? <img src="https://i.stack.imgur.com/kOnzy.gif"/>:<table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {prodList.map((product) => {
                  return (
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                        <td>
                        <Link
                          to={`/product/edit/${product.id}`}
                          className="btn btn-xs btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                          className="btn btn-xs btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
