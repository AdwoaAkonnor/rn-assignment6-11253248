import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import DressData from "./src/mock_Data/DressData";

const App = () => {
  return (
    <SafeAreaView>
      {/**Header Section */}
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <View>
            {/**Menu */}
            <Image source={require("./assets/Menu.png")} />
          </View>
          {/**logo */}
          <View style={{ marginLeft: 50 }}>
            <Image source={require("./assets/Logo.png")} />
          </View>
          {/**Search */}
          <View style={{ marginLeft: 60 }}>
            <Image source={require("./assets/Search.png")} />
          </View>
          {/**shoping bag */}
          <View>
            <Image source={require("./assets/shoppingBag.png")} />
          </View>
        </View>
      </View>
      {/**second section */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
        {/**Text */}
        <View style={{ marginLeft: 18 }}>
          <Text style={{ fontSize: 23 }}>O U R    S T O R Y</Text>
        </View>
        {/**listView*/}
        <View style={{marginLeft: 65, backgroundColor:'#E5E4E2',padding:10, borderRadius:20}}>
          <Image source={require("./assets/Listview.png")} />
        </View>
        {/**Filter */}
        <View style={{marginRight: 20 , backgroundColor:'#E5E4E2',padding:10, borderRadius:20}}>
          <Image source={require("./assets/Filter.png")} />
        </View>
      </View>
      <FlatList
      data={DressData}
      renderItem={({item}) =>(
        <TouchableOpacity>
        {/**  Wardrobe*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
          }}
        >
          {/** Dress 1 */}
          <View>
            {/** Image*/}
            <View>
              <Image source={item.image} />
            </View>
            {/** Texts */}
            <View>
              <Text>{item.name}</Text>
              <Text>{item.text}</Text>
              <Text style ={{ color: 'red'}}>$120</Text>
            </View>
          </View>
          {/** Dress 2 */}
          <View>
            <View>
              <Image source={item.image1} />
            </View>
            {/** Texts */}
            <View>
              <Text>{item.name1} </Text>
              <Text>{item.text}</Text>
              <Text style={{color: 'red'}}>$120</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity> 
      )
    }
      />
     
    </SafeAreaView>
  );
};

export default App;
