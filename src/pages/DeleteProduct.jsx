import React, { useEffect} from "react";
import  {useParams, useNavigate } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import tableService from "../services/tableService";
import swal from "sweetalert";

const DeleteTable = () => {
  let navigate = useNavigate ();
  let params = useParams ();
  let id = params.id;
  const confirmDelete = () =>{
    swal({ icon: "warning", 
          dangerMode: true,
          title : "Confirm",
          text : "ยืนยันการลบข้อมูล?",
          buttons: true,
         
    }).then((confirm) =>{
      if(confirm){
        //call delete service
        tableService.deleteTable(id)
        .then ((res) => navigate("/product"))
        .catch ((e) =>  console.log(e));
      }else{
        // กลับไปหน้า Product
        navigate("/product");
      }
    });
  };
  useEffect( ()=>{
    confirmDelete();
  },[]);
  return (
    <></>
  );
};

export default DeleteTable;