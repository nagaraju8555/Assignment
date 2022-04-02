import React, { Component } from 'react'

import axios from "axios"
import logo from "../logo.svg"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Appointment from './Appointment';
import ArticleIcon from '@mui/icons-material/Article';

export default class Patientlist extends Component {
  state = {
    data: [],
    files:[],
  }

  componentDidMount() {
    
    axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails").then((response)=>{
    // console.log("patient :",response.data)
    this.setState({
        data : [response.data[0]]
    })
    })

    axios.get("https://619f39821ac52a0017ba467e.mockapi.io/Files").then((response)=>{
    console.log("files :",response.data[0])
    this.setState({
      files : response.data[0].files
    })
    })
  }

  render() {
    return (
      <div
        style={{
          width: "80%",
          backgroundColor: "#dbdedf",
          minHeight: "86vh",
        }}
      >
        <div
          className="container-fluid "
          style={{ padding: "10px", paddingBottom: "10px" }}
        >      
        <div className='row'>
            <div className='col-12' style={{textAlign : "left"}}>
            <div className="card">
              <div className="card-body">
                <h2><span style={{color : "blue" , fontSize :"20px"}}><i style={{ fontSize:"24px" }} class="fa">&#xf2be;</i>
</span><b> Diane Cooper</b></h2>
              </div>
            </div>
            </div>
            

        </div>
        <div className='row'>
          <div className='col-md-3'>
          {this.state.data.map((data,index) => (           
              
              <div key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">                 
                      <img
                        src={logo}
                        className="card-img-top rounded-circle"
                        alt=""
                        // width="50px" height="100px"
                        style={{height :"100px" , width : "100px"}}
                      />
                    </div>
                    <h3 className="card-title">
                      {data.name}
                    </h3>
                    <span style={{color : "grey"}}>{data["e-email"]}@gmail.com</span>
                    <div className='row'>
                      <div className='col-6 pl-5' >
                        <span style={{fontSize : "30px"}}><b>{data.Past}</b></span> <br /><span style={{color : "grey",fontSize : "16px"}}>Past</span>                       
                      </div>
                      <div className='col-6'style={{borderLeft : "2px solid grey"}} >
                      <span style={{fontSize : "30px"}}><b>{data.Upcoming}</b></span>
                      <br /><span style={{color : "grey",fontSize : "16px"}}>Upcoming</span>
                      </div>
                    </div>
                    <p className="card-text">                      
                      <br />
                      <button className='btn btn-primary'>Send Message</button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-6'>
          {this.state.data.map((data,index) => (       
            <div className="card" key={index}>
                  <div className="card-body " style={{textAlign : "left"}}>
                    <div className='row pt-2 ' >
                      <div className='col-4'>
                        <p className="patientinfo">Gender</p>
                        <p style={{lineHeight: "0.1"}}>{data.Gender}</p>
                        <div className="underline"></div>
                      </div>
                      <div className='col-4'>
                      <p className="patientinfo">Birthday</p>
                      <p style={{lineHeight: "0.1"}}>{data.Birthday}</p>
                      <div className="underline"></div>
                      </div>
                      <div className='col-4'>
                      <p className="patientinfo">Phone Number</p>
                      <p style={{lineHeight: "0.1"}}>{data["Phone Number"]}</p>
                      <div className="underline"></div>
                      </div>                      
                    </div><br/> <br/>
                    <div className='row'>
                      <div className='col-4'>
                        <p className="patientinfo">Street Address</p>
                        <p style={{lineHeight: "0.1"}}>{data["Street Address"]}</p>
                        <div className="underline"></div>
                      </div>
                      <div className='col-4'>
                      <p className="patientinfo">City</p>
                      <p style={{lineHeight: "0.1"}}>-</p>
                      <div className="underline"></div>
                      </div>
                      <div className='col-4'>
                      <p className="patientinfo">Zip Code</p>
                      <p style={{lineHeight: "0.1"}}>{data["ZIP Code"]}</p>
                      <div className="underline"></div>
                      </div>                      
                    </div><br/><br/>
                    <div className='row pb-3'>
                      <div className='col-4'>
                        <p className="patientinfo">Member Status</p>
                        <p style={{lineHeight: "0.1"}}>{data["Member Status"]}</p>
                        <div className="underline"></div>
                      </div>
                      <div className='col-4'>
                      <p className="patientinfo">Registered Date</p>
                      <p style={{lineHeight: "0.1"}}>{data["Register Date"]}</p>
                      <div className="underline"></div>
                      </div>                                           
                    </div>
                  </div>
              </div>
          ))}
          </div>
          <div className='col-md-3'>
              <div className="card" >
                  <div className="card-body " >
                      <p style={{textAlign : "left"}}><b>Notes</b></p>
                      <div className='p-2' style={{backgroundColor: "#f2f2f2", textAlign : "left"}}>
                          <p><span>-</span> This patient is lorem ipsum dolor</p>
                          <p><span>-</span> Lorem ipsum dolor it amet</p>
                          <p><span>-</span> Has alirgic history with Cataflam</p>
                          <div className='pb-1' >
                            <div style={{textAlign : "right"}}>
                              <button className='btn btn-primary'>save note</button>
                            </div>                            
                          </div>
                      </div>
                      <p style={{textAlign : "left"}}>lorem ipsum dolor it amet</p>
                      <p style={{textAlign : "left" , color :"grey" , lineHeight: "0.1" , fontSize : "14px"}}><span className='text-primary' ><PermIdentityIcon /></span>Drg. Mega Nandana</p>
                    </div>
                </div>
          </div>
        </div>
        <div className='row pt-1'>
          <div className='col-9'>
            <Appointment />
          </div>
          <div className='col-3'>
            <div className="card" >
                <div className="card-body " >
                  <div className='row'>
                    <div className='col-8' style={{textAlign : "left"}}>
                        <p><b>File/Documents </b></p>
                    </div>
                    <div className='col-4'>
                        <p style={{fontSize:"15px" , color :"blue" }} ><span><i  className="fa">&#xf0f6;</i> &nbsp;&nbsp;</span> Add Files </p>
                    </div>
                  </div> 
                  {this.state.files.map((item,index)=>(                   
                   <div className='p-1' key={index}>
                  <div className="card" >
                    <div className="card-body " >
                        <div className='row'>
                          <div className='col-1'>
                            <ArticleIcon />
                          </div>
                          <div className='col-9'>
                            {item}
                          </div>
                          <div className='col-1'>
                          <i style={{ fontSize:"24px"}} className="fa">&#xf01a;</i>
                          </div>
                        </div>
                    </div>
                  </div>
                  </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
