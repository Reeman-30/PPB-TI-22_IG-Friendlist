import React, { Component } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { View, StyleSheet } from "react-native";
import SearchBarUI from "./widgets/SearchBarUI";
import ExpScrollView from "./modules/ExpScrollView";
import ExpFlatList from "./modules/ExpFlatList";

import { Users } from "../const-data/Users";
import ExpSectionList from "./modules/ExpSectionList";

class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.header}>
          <SearchBarUI />
        </View>
        <View style={styles.body}>
          <ExpScrollView Data={Users} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  body: {
    flex: 9,
  },
});

export default MyFriends;
