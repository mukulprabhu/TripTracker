
const TripReport = ({ DataSource }) => {
    return (
        <div style={{ float: 'left', width: '80%', borderCollapse: 'collapse' }}>
            <table width="100%" border="1px">
                <thead>
                    <tr style={{ backgroundColor: 'lightblue', color: 'black' }}>
                        <th>Driver</th>
                        <th>Total Duration</th>
                        <th>Total Distance</th>
                        <th>Speed</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'lightgrey', color: 'black' }}>
                    {
                        DataSource.map((rep, idx) => (
                            <tr key={idx}>
                                <td>{rep.driverName}</td>
                                <td>{rep.totalDuration}</td>
                                <td>{rep.totalDistance}</td>
                                <td>{rep.speed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TripReport
