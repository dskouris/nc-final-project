import React, { Component } from "react";
import { Text, View } from "react-native";

import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

export default class Test extends Component {
  render() {
    return (
      <View>
        <Text>heyyyyyyy</Text>
        <ScrollableTabView style={{ marginTop: 20 }}>
          <Text tabLabel="Tab #1">My</Text>
          <Text tabLabel="Tab #2">favorite</Text>
          <Text tabLabel="Tab #3">project</Text>
        </ScrollableTabView>
      </View>
    );
  }
}
// import React, { Component } from "react";
// import ScrollableTabView from "react-native-scrollable-tab-view";
// import List from "./List";
// import Map from "./Map";

// export default class Test extends Component {
//   render() {
//     return (<View><ScrollableTabView>
//         <List tabLabel="List" />
//         <Map tabLabel="Map" />
//       </ScrollableTabView></View>

//     );
//   }
// }
