import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import { directoryData } from '../data/directoryData';

export default function HomeScreen({ navigation }) {
  const renderDirectory = ({ item }) => (
    <TouchableOpacity
      style={styles.directoryCard}
      onPress={() => navigation.navigate('Messages', { directoryId: item.id })}
    >
      <View style={[styles.circle, { backgroundColor: item.color }]}>
        <Text style={styles.initial}>{item.initial}</Text>
      </View>

      <Text style={[styles.directoryTitle, { color: item.color }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Messages Directory</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Important Message Directories</Text>
        <Text style={styles.infoSubtitle}>
          Tap any directory below to view stored messages.
        </Text>
      </View>

      <FlatList
        data={directoryData}
        renderItem={renderDirectory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030A12',
    paddingHorizontal: 22,
    paddingTop: 35
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 35
  },
  infoCard: {
    backgroundColor: '#101923',
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 22,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#1B2B3A'
  },
  infoTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 20
  },
  infoSubtitle: {
    color: '#D8D8D8',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1
  },
  grid: {
    paddingBottom: 30
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 22
  },
  directoryCard: {
    width: '47%',
    height: 170,
    backgroundColor: '#101923',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1B2B3A'
  },
  circle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22
  },
  initial: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800'
  },
  directoryTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 1.5
  }
});