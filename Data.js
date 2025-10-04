import { Component } from "react";
import TeacherServiceDemo from "./Service/TeacherServiceDemo";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [],
        };
    }

    componentDidMount() {
        TeacherServiceDemo.getData()


            .then((result) => {
            
                this.setState({
                    teacher: result.data
                })

});

    }



render() {
    return (
        <div>
            <header>
                <table align="center" border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>City</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Dept Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teacher.map((t1) => (
                            <tr key={t1.id}>
                                <td>{t1.id}</td>
                                <td>{t1.city}</td>
                                <td>{t1.name}</td>
                                <td>{t1.salary}</td>
                                <td>{t1.department_did}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </header>
        </div>
    );

}
}
export default Data;
