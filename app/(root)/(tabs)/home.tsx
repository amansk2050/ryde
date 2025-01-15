import { SignedIn, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { user } = useUser();
  return (
    <SafeAreaView className="flex-1 justify-center items-center ">
      <SignedIn>
        <Text className="">Home {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
    </SafeAreaView>
  );
};

export default Home;
