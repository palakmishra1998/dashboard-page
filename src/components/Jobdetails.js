import { Table } from "react-bootstrap";

function Jobdetails({ title, jobDetailsData }) {
            return (
                <div className="job-detail-container dash-card">
                    <h3 className="title">{title}</h3>
                    <Table className="job-detail-table">
                        <thead>
                            <tr>
                                {Object.keys(jobDetailsData[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {jobDetailsData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        }

export default Jobdetails;