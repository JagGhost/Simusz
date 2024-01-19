import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#054456" }}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={{ paddingHorizontal: 25 }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 30,
            }}
          >
            <View>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 35 }}>Explore</Text>
              <Text style={{ color: "white" }}>Find products easier here</Text>
            </View>
            <View
              style={{
                backgroundColor: "#F68827",
                height: 48,
                width: 48,
                borderRadius: 12,
              }}
            ></View>
          </View>
          <ScrollView style={{ gap: 20, marginTop:20}}>
            <View style={{ backgroundColor: "#1AA0B9", width: "100%", height: 210, borderRadius: 16, justifyContent: "center" }}>
              <Text style={{ alignSelf: "center" }}>img here</Text>
              <View style={{ backgroundColor: "white", width: "100%", height: 20, position: "absolute", bottom: 0, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, height: 50, paddingHorizontal: 16, justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lamp</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#1AA0B9", width: "100%", height: 210, borderRadius: 16, justifyContent: "center" }}>
              <Text style={{ alignSelf: "center" }}>img here</Text>
              <View style={{ backgroundColor: "white", width: "100%", height: 20, position: "absolute", bottom: 0, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, height: 50, paddingHorizontal: 16, justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lamp</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#1AA0B9", width: "100%", height: 210, borderRadius: 16, justifyContent: "center" }}>
              <Text style={{ alignSelf: "center" }}>img here</Text>
              <View style={{ backgroundColor: "white", width: "100%", height: 20, position: "absolute", bottom: 0, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, height: 50, paddingHorizontal: 16, justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lamp</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
