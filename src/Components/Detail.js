import React, { Component } from 'react';
import {Service} from '../service/service'
class Detail extends Component {
    constructor(props){
        super(props)
        let token= localStorage.getItem('auth-token')?localStorage.getItem('auth-token'):''
        this.state={
            user_token : token,
            selectedFile: null,
            email: 'null',
            image: 'null',
            name :'null' ,
        }
    }
    handleFileChange= (e)=>{
        this.setState({
            selectedFile:e.target.files[0]
        })
    }
    componentDidMount(){
    }

    handleUpload= async(e)=>{
        let resBody = await Service.uploadFile(this.state.selectedFile)
        if(resBody.error) { console.log('loi upload file')}
        else{console.log('up load thanh cong');
        this.setState({
            image:resBody.imgLocation
        })}
    }

    render() {
        return (
            <div className="tab-pane fade active show"  id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={this.state.image} width="220px" height="220px"/>
                        <div className="">
                            <input type="file" onChange={this.handleFileChange}/>
                        </div>
                        <div className="btn btn-secondary" onClick={this.handleUpload}>Upload</div>
                    </div>

                    <div className="col-lg-9">
                        <div className="form-group">
                            <label>FullName</label>
                            <input  type="text"  className="form-control"  placeholder="full name" value={this.state.name} name="fullName"  />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" disabled className="form-control" placeholder="email" name="email" value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="number"  className="form-control" placeholder="phoneNum" name="phoneNum"  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;