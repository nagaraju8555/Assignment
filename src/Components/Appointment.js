import React, { Component } from 'react'
import Timelines from './Timeline'

export default class Appointment extends Component {
  render() {
    return (       

            <div className="card" >
                <div className="card-body" >
                    <div className='p-1' style={{backgroundColor: "#dbdedf"}}>                    
                        <ul class="nav nav-pills" role="tablist" >
                            <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="pill" href="#home">Upcoming Appointment</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="pill" href="#menu1">Post Appointment</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="pill" href="#menu2">Medical Records</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div id="home" class="container tab-pane active"><br />
                            <Timelines />
                        </div>
                        <div id="menu1" class="container tab-pane fade"><br />
                            <h3>No Data</h3>
                           
                        </div>
                        <div id="menu2" class="container tab-pane fade"><br />
                            <h3>No Data</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
       
      
    )
  }
}
