import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ProductCreate(props) {
  const history = useHistory()
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading,setLoading]=useState(false)

  let handleSubmit = async(e) => {
    e.preventDefault()
    try {
      
  setLoading(true)
    await axios.post("https://611939e08ed292001799eef7.mockapi.io/ProductCrud",{productName,price});
    setLoading(false)
    history.push("/product")
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary mt-3"
                disabled={setLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;
