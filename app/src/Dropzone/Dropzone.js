import React, { Component } from 'react'
import dropzoneStyle from './Dropzone.css'

class Dropzone extends Component {
    state = {

    }

    render () {
        return (
            <div className={ dropzoneStyle.Dropzone }>
                <img
                    alt="upload"
                    className={ dropzoneStyle.Icon }
                    src="baseline-cloud_upload-24px.svg" 
                />
                <span>Upload Files</span>
            </div>
        );
    }
}