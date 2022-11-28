import { useState, useEffect } from "react";
import axios from "axios";
import { SiMicrosoftexcel } from "react-icons/si";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { TiExport } from "react-icons/ti";
import { MdRemoveCircle } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

// import { BsWindowSidebar } from 'react-icons/bs';

const Admin = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  // const [deleting,setDeleting]=useState(null)

  let url = "http://localhost:8000/Employee";

  // axios({
  //   url: url,
  //   method: "get",
  // })
  //   .then((val) => val.data)
  //   .then((data) => console.log("results-", data));

  fetch(url,{
    method:'GET'
  }).then(da=>da.json()).then(res=>{
    setTasks(res)})

  // const getAll
  const pdfDownloadFile = () => {
    const docs = new jsPDF();
    let empList = [];
    for (let i = 0; i < tasks.length; i++) {
      empList.push(Object.values(tasks[i]));
    }
    autoTable(docs, {
      head: [["#", "Name", "Email", "Mobile", "Position"]],
      body: empList,
    });
    docs.save("employee.pdf");
  };

  const expExcels = () => {
    let arr = [];

    for (let i = 0; i < tasks; i++) {
      let arr = [["#", "Name", "Email", "Mobile", "Position"]];
      arr.push(Object.values(tasks[i]));
    }
    return arr;
  };
  useEffect(() => {
    axios.get(url).then((res) => {
      setTasks(res.data);
      setisLoading(false);
    });
  }, [tasks]);

  // useEffect(()=>{
  //   axios.get(`${url}`).then(res=>{
  //     setDeleting(res.data)

  //   })
  // },[deleting])

  // const dataCSV=expExcels()
  const pdFile = pdfDownloadFile();

  return (
    <div className="admin">
      <button
        onClick={pdFile}
        type="button"
        style={{ fontSize: "30px", marginLeft: "10px" }}
      >
        <TiExport />
      </button>
      <CSVLink
        data={expExcels()}
        style={{ fontSize: "30px", marginLeft: "20px" }}
      >
        <SiMicrosoftexcel />
      </CSVLink>

      <ul>
        <li className="dash">
          <h4>Employee Id</h4>
          <h4>Names</h4>
          <h4>Email</h4>
          <h4>Mobile</h4>
          <h4>Pisition</h4>
          <h4>Remove</h4>
          <h4>Edit</h4>
        </li>
        {!isLoading ? (
          tasks.map((task) => {
            const { id, name, email, phone, position } = task;

            // const deleteEmployee=()=>{
            //   let choice=window.confirm(`Do You want to delete ${name}`)
            //   if(choice)
            //   axios.delete(`${url}/${id}`).then(()=>{
            //     alert(`Employee ${name} Has Deleted Successfully`)
            //     setDeleting(null)
            //   })
            // }
            // if(!deleting) return null
            return (
              <li key={task.id} className="line dash">
                <h4>{id}</h4>
                <h4>{name}</h4>
                <h4>{email}</h4>
                <h4>{phone}</h4>
                <h4>{position || "Normal"}</h4>
                <h4 className="editbtn">
                  <button
                    style={{
                      cursor: "pointer",
                      outline: "none",
                      textAlign: "center",
                    }}
                  >
                    <MdRemoveCircle
                      style={{
                        marginLeft: "10px",
                        fontSize: "30px",
                        color: "black",
                      }}
                    />
                  </button>
                </h4>
                <h4>
                  <Link
                    style={{
                      cursor: "pointer",
                      outline: "none",
                      textAlign: "center",
                    }}
                    to="viewing"
                  >
                    <FaEdit
                      style={{
                        marginLeft: "10px",
                        fontSize: "30px",
                        color: "black",
                      }}
                    />
                  </Link>
                </h4>
              </li>
            );
          })
        ) : (
          <div>Wait...</div>
        )}
      </ul>
    </div>
  );
};

export default Admin;
