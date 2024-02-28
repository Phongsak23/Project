import React, { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import tableService from "../services/tableService";

const EditProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [Table, setTable] = useState({});

  const fetchTable = (id) => {
    tableService.get(id)
      .then((res) => {
        setTable(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchTable(id);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTable({ ...Product, [name]: value });
  };
  const saveTable = (e) => {
    e.preventDefault();
    console.log(Table);
    tableService.updateTable(id,Table)
      .then((res)=>{
        swal({
          icon: "success",
          text: "แก้ไขข้อมูลสำเร็จ",
          title: "ผลการทำงาน"
        });
        navigate("/product");
      })
      .catch((e)=>swal({
        icon: "error",
        text: "update failed",
        title: "Result"
      })
      );

  }
  return (
    <MainLayout>
      <h1 className="mt-3">Edit Product</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveTable}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                  value={Table.name}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Price
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={handleInputChange}
                  value={Table.price}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Category
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Category"
                  onChange={handleInputChange}
                  value={Table.category}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                time
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="Time"
                  id="Time"
                  placeholder="Time"
                  onChange={handleInputChange}
                  value={Table.Time}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                namecostomer
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="namecostomer"
                  id="namecostomer"
                  placeholder="namecostomer"
                  onChange={handleInputChange}
                  value={Table.namecostomer}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditProduct;
