import { SafeAreaView } from "react-native";
import { FlexBoxScreen } from "./src/screens/FlexBoxScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      <FlexBoxScreen />
    </SafeAreaView>
  )
}
export default App;