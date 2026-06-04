import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import { getDirectoryById } from '../data/messages';

export default function MessageScreen({ route }) {
  const directory = getDirectoryById(route.params.id);

  const renderNormalMessage = ({ item, index }) => (
    <View style={styles.messageCard}>
      <View style={[styles.numberBadge, { backgroundColor: directory.color }]}>
        <Text style={styles.numberText}>{index + 1}</Text>
      </View>

      <Text style={styles.messageText}>{item}</Text>
    </View>
  );

  const renderAchievementMessage = ({ item, index }) => (
    <View style={styles.achievementCard}>
      <View style={[styles.numberBadge, { backgroundColor: directory.color }]}>
        <Text style={styles.numberText}>{index + 1}</Text>
      </View>

      <View style={styles.achievementInfo}>
        <Text style={styles.achievementTitle}>{item.title}</Text>
        <Text style={styles.achievementSubtitle}>{item.subtitle}</Text>
      </View>

      <View style={styles.achievedBox}>
        <View style={styles.checkCircle}>
          <Text style={styles.checkText}>✓</Text>
        </View>
        <Text style={styles.achievedText}>Achieved</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>{directory.title}</Text>

        <View style={[styles.topCard, { borderColor: directory.color }]}>
          <View style={[styles.bigCircle, { backgroundColor: directory.color }]}>
            <Text style={styles.bigInitial}>{directory.initial}</Text>
          </View>

          <Text style={styles.title}>{directory.description}</Text>
        </View>

        <FlatList
          data={directory.messages}
          renderItem={
            directory.isAchievement
              ? renderAchievementMessage
              : renderNormalMessage
          }
          keyExtractor={(item, index) => `${directory.id}-${index}`}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#020912',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
  },

  screenTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3,
    marginBottom: 35,
  },

  topCard: {
    backgroundColor: '#07111D',
    borderRadius: 30,
    borderWidth: 2,
    height: 235,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  bigCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  bigInitial: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: '900',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 2,
  },

  listContent: {
    paddingBottom: 30,
  },

  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#101923',
    borderRadius: 24,
    paddingHorizontal: 18,
    minHeight: 92,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1B2A3A',
  },

  numberBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },

  numberText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  messageText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 27,
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#101923',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 18,
    minHeight: 120,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1B2A3A',
  },

  achievementInfo: {
    flex: 1,
  },

  achievementTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
  },

  achievementSubtitle: {
    color: '#B8BDC7',
    fontSize: 15,
    lineHeight: 22,
  },

  achievedBox: {
    alignItems: 'center',
    marginLeft: 8,
  },

  checkCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#4CD964',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  checkText: {
    color: '#4CD964',
    fontSize: 20,
    fontWeight: '900',
  },

  achievedText: {
    color: '#4CD964',
    fontSize: 13,
    fontWeight: '600',
  },
});