import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PostContainer from "./PostContainer";

const CommunityContainer = () => {
  const data = [
    { id: '1', name: "user1", title: "title1", detail: "ail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1detail1" },
    { id: '2', name: "user2", title: "title2", detail: "detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2detail2" },
    { id: '3', name: "user3", title: "title3", detail: "detail3" },
    { id: '4', name: "user4", title: "title4", detail: "detail4" },
    { id: '5', name: "user5", title: "title5", detail: "detail5" },
    { id: '6', name: "user6", title: "title6", detail: "detail6" },
    { id: '7', name: "user7", title: "title7", detail: "detail7" },
    { id: '8', name: "user8", title: "title8", detail: "detail8" },
    { id: '9', name: "user9", title: "title9", detail: "detail9" },
    { id: '10', name: "user10", title: "title10", detail: "detail10" },
    { id: '11', name: "user11", title: "title11", detail: "detail11" },
    { id: '12', name: "user12", title: "title12", detail: "detail12" },
    { id: '13', name: "user12", title: "title12", detail: "detail12" },
    { id: '14', name: "user12", title: "title12", detail: "detail12" },
    { id: '15', name: "user12", title: "title12", detail: "detail12" },
    { id: '16', name: "user12", title: "title12", detail: "detail12" },
    { id: '17', name: "user12", title: "title12", detail: "detail12" },
    { id: '18', name: "user12", title: "title12", detail: "detail12" },
  ];

  const renderItem = ({ item }) => (
    <PostContainer id={item.name} title={item.title} detail={item.detail} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default CommunityContainer;
