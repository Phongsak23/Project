import http from "../http-common.js"

const getAll = () => {
  return http.get("/Table");
}

const get = (id) => {
  return http.get("/Table/" + id);
}

const create =(Table) =>{
  return http.post("/Table", Table);
}

const deleteTable = (id) =>{
  return http.delete("/Table/"+ id);
}

const updateTable = (id, Table)=> {
  return http ("/Table/"+id, Table);
}

const TableService = {
  getAll,
  get,
  create,
  deleteTable,
  updateTable
}

export default TableService