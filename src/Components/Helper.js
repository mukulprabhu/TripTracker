const MIN_AVG_SPEED = 5;
const MAX_AVG_SPEED = 100;
//const arrData = ["Driver John", "Driver Tree", "Driver Dom", "Driver Brian", "Driver NoTrip", "Trip John 07:30 07:45 20.5", "Trip Tree 08:30 09:45 50.7", "Trip Tree 07:30 07:45 20.8", "Trip John 08:58 09:45 80.5", "Trip Tree 07:30 07:45 20.3", "Trip Brian 20:30 21:45 55.5", "Trip Tree 07:30 07:45 20.6", "Trip Dom 08:30 09:45 50.8"];

function Helper(arrData) {
    const ProcessFile = (arrData) => {
        const drivers = []
        let mapDrivers = new Map()
        const finalDriverReport = []

        arrData.forEach(element => {
            const [command, driverName, ...tripDetails] = element.split(' ');

            if (!drivers[driverName]) {
                drivers[driverName] = {
                    totalDistance: 0,
                    totalDuration: 0,
                    speed: 0,
                    trips: []
                };
            }

            if (command.toLowerCase() === 'trip') {
                const calculateTripDetails = Trip(tripDetails);
                calculateTripDetails.isValidTrip && drivers[driverName].trips.push(calculateTripDetails)
            }

            mapDrivers.set(driverName, drivers[driverName]);
        });

        for (let key of mapDrivers.keys()) {
            let driverTripDetails = mapDrivers.get(key).trips

            let totalDistance = getTotalDistance(driverTripDetails)
            let totalDuration = getTotalDuration(driverTripDetails)
            let speed = getAverageSpeed(totalDistance, totalDuration)

            drivers[key]['totalDistance'] = Math.round(totalDistance)
            drivers[key]['totalDuration'] = totalDuration
            drivers[key]['speed'] = speed

            mapDrivers.set(key, drivers[key])
        }

        mapDrivers.forEach((key, value) => {
            const driverName = value
            const { totalDuration, totalDistance, speed } = key

            let record = {
                driverName,
                totalDuration,
                totalDistance,
                speed,
            }

            finalDriverReport.push(record)
        })

        finalDriverReport.sort((current, next) => {
            return next.speed - current.speed
        })

        return finalDriverReport
    }


    const Trip = (tripDetails) => {
        let [tripStartTime, tripEndTime, tripDistance] = tripDetails
        tripDistance = +tripDistance
        let tripDuration = getTripDuration(tripStartTime, tripEndTime)
        let tripAvgSpeed = getTripAvgSpeed(tripDuration, tripDistance)
        if (
            MIN_AVG_SPEED <= tripAvgSpeed &&
            tripAvgSpeed <= MAX_AVG_SPEED
        ) {
            return {
                tripStartTime,
                tripEndTime,
                tripDistance,
                tripDuration,
                tripAvgSpeed,
                isValidTrip: true,
            }
        } else {
            return { isValidTrip: false }
        }
    }

    function getTripDuration(startTime, endTime) {
        let startTimeArray = startTime.split(':')
        let endTimeArray = endTime.split(':')
        let startTimeInMinutes = 60 * +startTimeArray[0] + +startTimeArray[1]
        let endTimeInMinutes = 60 * +endTimeArray[0] + +endTimeArray[1]
        return endTimeInMinutes - startTimeInMinutes
    }

    function getTripAvgSpeed(tripDuration, tripDistance) {
        return (tripDistance * 60) / tripDuration
    }

    const getAverageSpeed = (totalDistance, totalDuration) => {
        return totalDistance ? Math.round((totalDistance * 60) / totalDuration) : 0
    }

    const getTotalDistance = (driverTripDetails) => {
        return driverTripDetails.reduce((accumulator, current) => {
            console.log('current.tripDistance', current.tripDistance)
            const acc = current.tripDistance + accumulator
            return acc
        }, 0)
    }

    const getTotalDuration = (driverTripDetails) => {
        return driverTripDetails.reduce((accumulator, current) => {
            const acc = current.tripDuration + accumulator
            return acc
        }, 0)
    }


    return ProcessFile(arrData);
}

export default Helper



