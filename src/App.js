import "./App.css";
import Schema from "./Schema.js";
import { useState,useContext } from "react";
import {useFormik} from 'formik';
import axios from "axios";
import UserContext from "./Usercontext";

function App() {
  const [a, b] = useState();
  const [c, d] = useState([""]);

  let handleRemoveCart = (item) => {
    let itemIndex = c.findIndex((obj) => item === obj);
    c.splice(itemIndex, 1);
    d([...c]);
  };

  const [isopen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isopen);
  };
    const useData = useContext(UserContext);


    let formik = useFormik({
      initialValues: {
        segment_name:"",
        first_name: "",
        last_name: "",
        gender: "",
        age: "",
        account_name: "",
        city: "",
        state: "",
      },
      validate: (values) => {
        const errors = {};
       
      },
      onSubmit: async (values) => {
       
        try {
          await axios.post(
            "https://webhook.site/ccdaffda-e5b8-4fed-96a8-a57f89b1e22c",
            values
            
          );
          useData.setUsers([...useData.users, values]);
        
        } catch (error) {
          console.log(error);
        }
      },

    })
 

  return (
    <div className="App">
      <div className="header">
        <div id="one">
          <i
            className="fa-solid fa-arrow-left fa-2x"
            style={{ color: "azure" }}
          ></i>{" "}
          <p>View Audience</p>
        </div>

        {isopen && (
          <div id="one">
            <i
              class="fa-solid fa-arrow-left fa-2x"
              style={{ color: "azure" }}
            ></i>{" "}
            <p>Saving Segment</p>
          </div>
        )}
      </div>
      <div className="footer">
        <div id="box">
          <button id="save" onClick={toggle}>
            Save Segment
          </button>
        </div>
        {isopen && (
          <div id="box2">
            <form onSubmit={formik.handleSubmit}>
              <label for="fname" style={{ fontSize: "larger" }}>
                Enter the Name of the Segment
              </label>
              <br />
              <br />
              <input
                type={"text"}
                name="segment_name"
                onChange={formik.handleChange}
              value={formik.values.segment_name}
                id="fname"
                placeholder="Name of the segment"
              />
              <br />
              <br />
              <p id="para">
                To save your segment, you need to add the schemas to build the
                query
              </p>
              <div className="trait">
                <span className="dot"></span>
                <p>-User Traits</p>
                <span className="dot" style={{ backgroundColor: "red" }}></span>
                <p>-Group Traits </p>
              </div>
              <span className="dot1"></span>

              <select id="schema" name="schema">
               
                <option type={"text"} name="first_name"  onChange={formik.handleChange} value={formik.values.first_name} >First Name</option>
                <option type={"text"} name="last_name"  onChange={formik.handleChange} value={formik.values.last_name} >Last Name</option>
                <option type={"text"} name="gender"  onChange={formik.handleChange} value={formik.values.gender} > Gender</option>
                <option type={"number"} name="age"  onChange={formik.handleChange} value={formik.values.age} > Age</option>
                <option type={"text"} name="account_name"  onChange={formik.handleChange} value={formik.values.account_name} >Account Name</option>
                <option type={"text"} name="city"  onChange={formik.handleChange} value={formik.values.city} > City</option>
                <option type={"text"} name="state"  onChange={formik.handleChange} value={formik.values.state} >State</option>
              </select>
              <i
                class="fa-solid fa-square-minus fa-3x"
                style={{ color: "grey", marginLeft: "30px" }}
              ></i>
              <br />

              {c.map((x) => (
                <Schema handleRemoveCart={handleRemoveCart} />
              ))}

              <br />
              <br />
              <br />
              <a onClick={() => d([...c, a])}>+ Add new schema</a>

              <div className="savesegment">
                <button id="btn-save" className="btn-save"  type={"submit"}>
                  Save the Segment
                </button>
                <button className="btn btn-outline-danger">Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
