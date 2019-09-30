// This resuable component will be used to show a list of results we got back from the yelp API.

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";
const ResultsList = ({ title, results, navigation }) => {
  // if there are no results, do not render (e.g. 'Big Spender')
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

// withNavigation is a special function that allows ResultsList to have access
// to the navigation prop directly, instead of receiving it from SearchScreen(parent component),
// a component that did not need to use navigation prop at all
// this allows us to skip passing the prop from Stack Navigator to SearchScreen to ResultsList.
// REF: Chap. 111 The withNavigation helper
export default withNavigation(ResultsList);
