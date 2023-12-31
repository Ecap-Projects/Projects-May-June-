import React, { useEffect, useState } from 'react';
import empService from "../service/EmpService";
import { useNavigate, useParams } from 'react-router-dom';

const EditEmp = () => {
  const [emp, setEmp] = useState({
    empname: '',
    email: '',
    address: '',
    phoneNo: '',
    empId: 0,
    password: '',
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    empService.getEmpById(id)
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const updateEmp = (e) => {
    e.preventDefault();

    empService.submitUpdateForApproval(emp, 'update')
      .then((response) => {
        const requestId = response.data;
        setMsg(`Emp details submitted for update approval with Request ID: ${requestId}. Waiting for admin approval.`);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='container'>
      <div className="row">
        <div className='col-md-6 offset-md-3'>
          <div className="card">
            <div className="card-header text-center fs-3">
              Edit Employee
              {msg && <p className='text-success'>{msg}</p>}
            </div>
            <div className="card-body">
              <form onSubmit={updateEmp}>
                <div className='mb-3'>
                  <label>Employee ID</label>
                  <input type='text' className='form-control' name='empId' value={emp.empId} readOnly />
                </div>
                <div className='mb-3'>
                  <label>Name</label>
                  <input type='text' className='form-control' name='empname' value={emp.empname} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                  <label>Email ID</label>
                  <input type='email' className='form-control' name='email' value={emp.email} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                  <label>Address</label>
                  <input type='text' className='form-control' name='address' value={emp.address} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                  <label>Phone</label>
                  <input type='tel' className='form-control' name='phoneNo' value={emp.phoneNo} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                  <label>Password</label>
                  <input type='password' className='form-control' name='password' value={emp.password} onChange={handleChange} />
                </div>
                <div className='text-center'>
                  <button type="submit" className='btn btn-success'>
                    Submit
                  </button>
                  <input type='reset' className='btn btn-danger ms-2' value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmp;
