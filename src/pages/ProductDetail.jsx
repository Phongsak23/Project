import  React,{useState, useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import logo from "../assets/react.svg";
import tableService from "../services/tableService";
const ProductDetail = () => {
  let params = useParams();
  let id = params.id;
  let [Product, setProduct] = useState({});

  const fetchProduct = (id)=>{
    tableService.get(id)
      .then((res)=>{
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((e)=>console.log(e));
  }

  useEffect(()=>{
    fetchProduct(id)
  },[]);
  
  return (
    <MainLayout>
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={logo} alt="" style={{width: '50%'}} />
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">
              Name:{" "}
            </label>{" "}
            {Product.name}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Price:{" "}
            </label>{" "}
            {Product.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Category:{" "}
            </label>{" "}
            {foodMenu.category}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Description:{" "}
            </label>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            expedita doloremque aliquid a hic est necessitatibus iusto mollitia,
            quasi quod modi quas ipsum repudiandae porro sint tempore totam nam
            blanditiis vel aut placeat similique, consectetur illum. Eius
            temporibus nam vero fuga illo officia reprehenderit eveniet, itaque
            enim expedita pariatur. Nulla?
          </p>

          <p>
            <label htmlFor="" className="lblStyle">
              ingredients:{" "}
            </label>{" "}
            {Product.ingredients}
          </p>

          <p className="text-center">
            <button className="btn btn-primary">Add to Cart</button>
          </p>
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <hr />
        {Product.reviews &&
          Product.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star: {"⭐️".repeat(r.star)}</p>
              <p>{r.message}</p>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;