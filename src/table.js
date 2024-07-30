import React from 'react';
import { Table } from 'react-bootstrap';

const StudentAttendance = () => {
    // Sample data for one student
    const studentData = {
        name: 'John Doe',
        attendance: [
            { subject: 'Mathematics', percentage: 90 },
            { subject: 'Science', percentage: 85 },
            { subject: 'English', percentage: 88 },
            { subject: 'History', percentage: 92 },
            { subject: 'Geography', percentage: 80 },
            { subject: 'Art', percentage: 87 },
        ]
    };

    return (
        <div className="container mt-4">
            <h2>Attendance Percentage for {studentData.name}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Attendance Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.attendance.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.subject}</td>
                            <td>{entry.percentage}%</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default StudentAttendance;
