import React , {useState,useEffect} from "react";
import MainLayout from '../layouts/MainLayout';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/tableService";
import logo from "../assets/react.svg";
import swal from "sweetalert";

const Product = () => {
  let navigate = useNavigate();
  const [products,setProducts]=useState([]);

  const fetchProducts = () => {
    ProductService.getAll()
      .then((res)=>{
        console.log(res.data.data)
        setProducts(res.data.data)
      })
      .catch((e)=>{
        console.log(e);
      });
  }
  
  useEffect(()=>{
    fetchProducts()
  },[]);

  return (
    <MainLayout>
      
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a Table
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {
          products.map((menu)=>(
              <ProductCard menu={menu}/>
          ))
        }
      </div>
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      
      <div className="product-item">
        <img src={"../images/"+props.menu.imageShoe} alt="" className="product-img" />
          <h5>{props.menu.name}</h5>
          <h5>${props.menu.price}</h5>
          <h6>{props.menu.category}</h6>
          <h6>Size {props.menu.sizeshoe}</h6>
          <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-success"
              >
                Buy Now
              </NavLink>{" "}
              <NavLink
                to={"/product/edit/" + props.menu._id}
                className="btn btn-warning"
              >
                Edit
              </NavLink>{" "}
              <NavLink 
                type="NavLink"
                className="btn btn-danger"
                to={"/product/delete/" + props.menu._id}
              >
                Delete
              </NavLink>
      </div>
      

    </>
  );
};
export default Product;