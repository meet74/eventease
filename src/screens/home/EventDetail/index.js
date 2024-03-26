import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    ScrollView,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import { Colors } from "../../../constant/Colors";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenNames } from "../../../constant/ScreenNames";
import { useDispatch } from "react-redux";
import { storeConfirmedData } from "../../../store/action/EventAction";
  
  const { width, height } = Dimensions.get("screen");
  
  const EventDetailScreen = (props) => {
      
    const { item } = props.route.params;
    console.log("detail",item);
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      },
      propertiesImage: {
        height: height * 0.4,
        width: width,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
      },
      cardaddresstext: {
        marginTop: 25,
        width: "100%",
        color: Colors.primaryColor,
        fontWeight: "bold",
        fontSize: 28,
        margin: 20,
      },
      descriptionText: {
        color: Colors.primaryColor,
        margin: 15,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",
      },
      description: {
        color: "gray",
        margin: 10,
        marginHorizontal: 20,
        lineHeight: 25,
      },
      amenityContainer: {
        flexDirection: "row",
        margin: 10,
        marginLeft: 20,
        alignItems: "center",
      },
      amenityText: {
        color: "white",
        margin: 10,
        fontSize: 16,
      },
      btnContainer: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        backgroundColor: Colors.primaryColor,
        alignSelf: "center",
        margin: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      btnText: {
        color: "white",
        padding: 20,
        fontSize: 18,
        letterSpacing: 1,
      },
    });

    const dispatch = useDispatch()

    const handleBooking = () => {
      dispatch(storeConfirmedData(item))
      props.navigation.navigate(ScreenNames.bookingConfirmationPage)
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{
              uri: item.eventImage,
            }}
            style={styles.propertiesImage}
          />
          <View>
            <Text style={styles.cardaddresstext}>{item.eventName}</Text>
            <Text style={styles.descriptionText}>Description</Text>
            <Text style={styles.description}>
              {item.eventDescription}
            </Text>
          </View>
  
          {/* <View>
            <Text style={styles.descriptionText}>Amenities</Text>
            {item.amenities.map((item) => {
              return (
                <View style={styles.amenityContainer}>
                  <MaterialCommunityIcons
                    name="star-four-points-outline"
                    size={20}
                    color="white"
                  />
                  <Text style={styles.amenityText}>{item}</Text>
                </View>
              );
            })}
          </View> */}
        </ScrollView>
  
        <TouchableOpacity style={styles.btnContainer} onPress={handleBooking }>
          <Text style={styles.btnText}>Book Event for $15</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default EventDetailScreen;
  