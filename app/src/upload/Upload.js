import React, { Component } from 'react'
import uploadStyle from './Upload.css'
import Dropzone from '../dropzone/Dropzone'

class Upload extends Component {
    state ={

    }

    render() {
        return (
            <div className={ uploadStyle.Upload }>
                <span className={ uploadStyle.Title }>Upload Files</span>
                <div className={ uploadStyle.Content}>    
                </div>
                <div className={ uploadStyle.Files}>    
                </div>
                <div className={ uploadStyle.Actions}>    
                </div>               
            </div>    
        )
    }
}