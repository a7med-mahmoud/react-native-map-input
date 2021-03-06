import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapInput, { MapInputVariants } from 'react-native-map-input';

const App = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Map Input By Marker</Text>
        <Text style={styles.text}>Latitude: {coordinate.latitude}</Text>
        <Text style={styles.text}>Longitude: {coordinate.longitude}</Text>
      </View>
      <MapInput
        variant={MapInputVariants.BY_MARKER} // not really needed as it's the default
        region={coordinate}
        onChange={setCoordinate}
        style={styles.map}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  map: {
    flex: 1,
  },
});

export default App;
