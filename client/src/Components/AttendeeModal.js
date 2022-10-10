import React,{useState} from "react";

export default function AttendeeModal() {

    const[formData,setFormData]=useState({
        name:'',
        email:'',
        phonenumber:''
    })

    function handleChange(e){
        console.log(formData)
        let name = e.target.name;
        let value= e.target.value

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(){
        console.log('Kuja')
    }
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Enter Information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Enter Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="name"
                    value={formData.name}
                    name='name'
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Enter Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="name"
                    value={formData.name}
                    name='name'
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="email"
                    email='@email.com'
                    onChange={handleChange}

                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Phone Number</label>
                  <input
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="telephone no"
                    value={formData.phonenumber}
                    onChange={handleChange}

                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
