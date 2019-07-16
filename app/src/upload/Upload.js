import React, { Component } from 'react'
import uploadStyle from './Upload.css'
import Dropzone from '../Dropzone/Dropzone'

class Upload extends Component {
    state ={
        files: [],
        uploading: false,
        uploadProgress: {},
        successfullyUploaded: false
    }

    onFilesAdded = files =>{
        this.setState(prevState =>({
            files:prevState.files.concat(files)
        }))
    }

    render() {
        return (
            <div className={ uploadStyle.Upload }>
                <span className={ uploadStyle.Title }>Upload Files</span>
                <div className={ uploadStyle.Content}>   
                    <Dropzone
                        onFilesAdded={ this.onFilesAdded }
                        disabled={ this.state.uploading || this.state.successfullyUploaded }
                    /> 
                </div>
                <div className={ uploadStyle.Files}>  
                    {this.state.files.map(file =>{
                        return(
                            <div key={ file.name } className= { uploadStyle.row }>
                                <span className={ uploadStyle.fileName }>{ file.name }</span>
                                { this.renderProgress(file) }
                            </div>
                        )
                    })}  
                </div>
                <div className={ uploadStyle.Actions}>  
                    { this.renderActions() }
                </div>               
            </div>    
        )
    }
}

export default Upload;