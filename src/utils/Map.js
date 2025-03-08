// Haversine formula for distance calculation
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Function to find optimal route using simple nearest neighbor algorithm
const findOptimalRoute = (currentLocation, stops) => {
  let route = [];
  let unvisited = [...stops];
  let currentPoint = currentLocation;

  while (unvisited.length > 0) {
    let nearestIndex = 0;
    let minDistance = Infinity;

    unvisited.forEach((stop, index) => {
      const distance = calculateDistance(
        currentPoint.latitude,
        currentPoint.longitude,
        stop.coordinates.lat,
        stop.coordinates.lng
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });

    const nextStop = unvisited[nearestIndex];
    route.push(nextStop);
    currentPoint = {
      latitude: nextStop.coordinates.lat,
      longitude: nextStop.coordinates.lng,
    };
    unvisited.splice(nearestIndex, 1);
  }

  return route;
};

export { calculateDistance, findOptimalRoute };
