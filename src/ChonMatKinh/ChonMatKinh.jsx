import React, { Component } from 'react'
import dataGlasses from '../data/dataGlasses.json'
export default class
  extends Component {

    state = {
        glassesCurrent: {
          "id": 2,
          "price": 50,
          "name": "GUCCI G8759H",
          "url": "./img/v2.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () =>
    {
      return dataGlasses.map((glassesItem,index) => {
          return <img onClick={()=>{this.changeGlasses(glassesItem)}} className="p-2 border border-radius-width-1" style={{width:'120px',marginLeft:'15px',cursor:'pointer'}} 
          key={index} src={glassesItem.url}/>
      })
    }
    changeGlasses = (newGlasses) =>
    {
      this.setState({
        glassesCurrent: newGlasses
      })
    } 

  render() {
    const GlassStyle = {
      width: '150px',
      top: '75px',
      right: '117px',
      opacity: '0.7',
    }
    const Glassinfo = {
      width: '250px',
      top: '200px',
      left: '318px',
      paddingLeft: '15px',
      backgroundColor: 'rgba(225,127,0,.5)',
      textAlign: 'left',
      height: '105px'
    }
    return (
      <div style={{ backgroundImage: 'url(./img/background.jpg)', backgroundSize: '1600px', minHeight: '1600px' }}>

        <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '1600px' }}>
          <h3 style={{ backgroundColor: 'rgba(0, 0, 0, .2)' }} className='text-center p-4  text-light'>Try Glass App Online</h3>
          <div className='container'>
          <div className='row mt-5 text-center'>
              <div className='col-6'>
                <div className="position-relative">
                  <img className="position-absolute" style={{ width: '250px' }} src="./img/model.jpg" alt='model.jpg' />
                  <img className="position-absolute" style={GlassStyle} src={this.state.glassesCurrent.url} />
                  <div style={Glassinfo} className="position-relative">
                    <p style={{color:'#3399ff',fontSize:'18px',paddingBottom:'-20px'}} className="font-weight-bold ">{this.state.glassesCurrent.name}</p>
                    <p className="font-weight-bold text-light" style={{fontSize: '13px',paddingRight: '10px'}} >{this.state.glassesCurrent.desc}</p>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <img style={{ width: '250px' }} src="./img/model.jpg" alt='model.jpg' />
              </div>

            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5" >
            {this.renderGlassesList()}
          </div>
        </div>
        


      </div>
    )
  }
}
