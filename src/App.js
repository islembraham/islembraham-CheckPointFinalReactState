import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Text } from "react"



class App extends Component {
  
    state = { 
      show : false, 
    };

    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

    
    
    render() {
        return (
          <div className="App">
                <button onClick={ this.toggleDiv }>Toggle div</button>
                <br /><br />
                { this.state.show && <Box /> }
                
            </div>
        );
    }
}

class Box extends Component {
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  state = {
    person: {
      fullName: "Islem Braham",
      bio: "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
      imgSrc:
        "https://lh3.googleusercontent.com/fife/ABSRlIohL1zNcmiS96fi7tM-5JTOZ5k-sUzIJuBu7LI8ZM1v4Y8FhC8GE2-WexkVU70yslY6aLAlBDFIHr4oPY-XkeFGSfWBGT5wXhRGkDqL2vnZs3daVX6WGK6JUjlhAlaLApOunr-UIMbFqAEA6QViJvM4_gPUGepKY9qPvmjbGCp0mty0PIbQLDC3DY-bYtXHynTEUFXccq0Ue_SyH_hAfYKAayqmbjXwPXnX6kZR2Q8016mN5yKQrK-MG1FiAVJlXsK3zSmYujLi_c0Z7_4yslLLK4MqHkkINIEf3DSVMNXq2cMSsm4He_wTafXjrI7ksRifQaWpzriXGgTrAU0eHurcm09iefCurqFIz8mqtkD7KabKJL4lBiu148kZI-kxrv7-uzNiaHMBmHB3WPE0Ot-4VhN9fboqqssXmcpM5zVeNvL_f2vDpl7_0Q0pa4gLgjcb-tQ6z9FTkvbvjNKaifCgYsh2922n6dBO0bz1qSstQYs_6AHMDfCoYE6gSr3RE0nwl2P30_Ks8MENvzYBGmCB-Y1l0n2x3yhEzytSx56yhY0dfZ7tB5nGRMvLMAT1AAetvCFLap0HTYLs-iGqQV6s0GixOmAKn71Ch6PX7ELX7V_m9jkAxT7-3vX91PDU6p1cpMed_mIG5OPPoNJtb7-5YJo6TV5eECTdx7ODUvTbdD2BZI_gPD8SKS_82LHIO9fUdJfVoazpLRcNqPKQOloLUAtTcrwqsEEmQ1AmeG7sjA=s83-c",
      profession: "Full stack JS developer",
    },
    curTime: null,
  };
  render() {
    return (
      <div>
        {this.state.person.fullName} <br />
        <br />
        <img src={this.state.person.imgSrc} /> <br />
        <br />
        {this.state.person.bio} <br />
        <br />
        {this.state.person.profession} <br />
        <br />
        {this.state.curTime} <br />
        <br />
      </div>
    );
  }
}

export default App;