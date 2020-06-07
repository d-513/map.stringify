Map.stringify = (map) => JSON.stringify([...map]);
Map.parse = (map) => new Map(JSON.parse(map));
