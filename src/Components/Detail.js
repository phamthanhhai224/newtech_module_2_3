import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                    <div className="col-lg-3">
                        <img src="https://st3.depositphotos.com/1767687/16607/v/1600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" width="200px" height="200px"/>
                        <div className="">
                            <input type="file"/>

                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="form-group">
                            <label>FullName</label>
                            <input type="password"  className="form-control"  placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="password" disabled className="form-control" placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="password"  className="form-control" placeholder="Enter password" name="password" />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;