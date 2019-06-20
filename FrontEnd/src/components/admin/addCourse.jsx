import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CourseName: '',
            // InchargLecture : '',
            CourseId: '',
            NumberOfEnrolledStudent: '',
            Year: '',
            Semester: '',
            Faculty: '',
            Department: '',
            CourseAddedDate: String,
            AcceptByLectureFlag: 0
        };
        this.onChange = this.onChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clearForm(e) {
        this.setState({
            CourseName: '',
            CourseId: '',
            NumberOfEnrolledStudent: '',
            Year: '',
            Semester: '',
            Faculty: '',
            Department: '',
            CourseAddedDate : ''
        });
    }

    render() {
        return <div className="container-contact100">
            <div className="wrap-contact100">
                <div className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="navbar-brand"><Link className="navbar-brand" to="/manageCourse"><i
                            className="fa fa-arrow-circle-left" style={{margin: '12px'}}/>Back
                        </Link></div>
                    </ul>
                </div>

                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>
				<span className="contact100-form-title">
					Add New Course
				</span>

                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Course ID</span>
                        <input className="input100" type="text" value={this.state.CourseId} onChange={this.onChange}
                               name="CourseId" placeholder="SE3020/CS2020" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Course Name</span>
                        <input className="input100" type="text" value={this.state.CourseName} onChange={this.onChange}
                               name="CourseName" placeholder="Software Architecture" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select Faculty</span>
                        <div>
                            <select className="selection-2" name="faculty" ref="Faculty">
                                <option value="Faculty of Computing">Faculty of Computing</option>
                                <option value="Faculty of Business">Faculty of Business</option>
                                <option value="Faculty of Engineering">Faculty of Engineering</option>
                            </select>
                        </div>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select Year</span>
                        <div>
                            <select className="selection-2" name="Year" ref="Year">
                                <option value="1">1st year</option>
                                <option value="2">2nd year</option>
                                <option value="3">3rd year</option>
                                <option value="4">4th year</option>
                            </select>
                        </div>
                        <span className="focus-input100"/>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Select Semester</span>
                        <div>
                            <select className="selection-2" name="Year" ref="Year">
                                <option value="1">1st Semester</option>
                                <option value="2">2nd Semester</option>
                            </select>
                        </div>
                        <span className="focus-input100"/>
                    </div>


                    <div className="wrap-input100 validate-input" data-validate="Course ID is required">
                        <span className="label-input100">Department</span>
                        <input className="input100" type="text" value={this.state.Department} onChange={this.onChange}
                               name="Department" placeholder="SE/IT/CS" required={true}/>
                        <span className="focus-input100"/>
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"/>
                            <button className="contact100-form-btn">
							<span>
                                Add
                            <input type="submit" value=""/>
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"/>
							</span>
                            </button>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6 mt-1">
                            <button className="btn btn-secondary btn-block" onClick={this.clearForm}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>;
    }
}
