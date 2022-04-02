import React, { Component } from 'react'
import { Timeline, TimelineEvent } from "react-event-timeline";
import ArticleIcon from '@mui/icons-material/Article';
import axios from 'axios';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default class Timelines extends Component {
    state = {
        data: [],
      }
    
      componentDidMount() {
        
        axios.get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details").then((response)=>{
        console.log("appointment :",response.data[0]["Upcoming Appointments"])
        this.setState({
            data : [response.data[0]["Upcoming Appointments"]]
        })
        })
      }
  render() {
    return (
        <div className=''style={{backgroundColor : "#f2f2f2"}}>
            <div className='row m-2'>
                <div className='col-8 pt-3' style={{textAlign : "left"}}>
                    <p><b>Root Canal Treatment</b></p>
                </div>
                <div className='col-4 pt-2'>
                    <button className='btn btn' style={{backgroundColor : "white"}}><KeyboardArrowDownIcon /> Show Previous Treatment</button>
                </div>      
                <div className="underline"></div>          
            </div>
            <Timeline>
                {this.state.data.map((item,index)=>(                              
                <TimelineEvent key={index}>
                    <div className='row'>
                        { console.log(item)    }
                        <div className='col-3' style={{borderRight : "1px solid rgb(242, 242, 242)"}}>
                            <p style={{fontWeight : "bold" , fontSize : "25px"}}>{item.Date}</p>
                            <span className='' style={{position:"absolute" ,top : "40px" , color :"grey"}}>{item.Time}</span>
                        </div>
                        <div className='col-3 pl-2' style={{borderRight : "1px solid rgb(242, 242, 242)"}}>
                            <p style={{color :"grey"}}>Treatment</p>
                            <span style={{position:"absolute" ,top : "35px"}}>{item.Treatment}</span>
                        </div>
                        <div className='col-2' style={{borderRight : "1px solid rgb(242, 242, 242)"}}>
                            <p style={{color :"grey"}}>Dentist</p>
                            <span style={{position:"absolute" ,top : "35px"}}>{item.Dentist}</span>
                        </div>
                        <div className='col-2' style={{borderRight : "1px solid rgb(242, 242, 242)"}}>
                            <p style={{color :"grey"}}>Nurse</p>
                            <span style={{position:"absolute" ,top : "35px"}}>{item.Nurse}</span>
                        </div>
                        <div className='col-2 pt-3' >
                            <span style={{color : "blue"}}><ArticleIcon /> <b>Note</b></span>
                            
                        </div>
                    </div>
                </TimelineEvent>   
                ))}             
            </Timeline>
        </div>
     
    )
  }
}
