import React,{useContext} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Screen from "../components/Screen";
import ListItem from '../components/ListItem'
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import routes from "../Navigation/routes"
import AuthContext from '../auth/AuthContext'
import authStorage from "../auth/storage"
import useAuth from '../auth/useAuth';


const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
      screen:routes.MY_LISTINGS
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      screen:routes.MESSAGE_SCREEN
    },
  ];


const AccountScreen = ({navigation}) => {

    // const {user, setUser} = useContext(AuthContext)

    // const handleLogout = () => {
    //     setUser(null);
    //     authStorage.removeToken();
    // }

    const {user, Logout} = useAuth()

    // const handleLogout = () => {
    //     setUser(null);
    //     authStorage.removeToken();
    // }

    return (
        <Screen style={{backgroundColor:colors.light}}>
            <View>
                <ListItem 
                title={user.name}
                subTitle={user.email}
                image={require("../assets/mosh.jpg")} 
                />
            </View>
            <View style={styles.account}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={ <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} /> }
                            onPress={()=>navigation.navigate(item.screen)}
                        />
                    )}
                />
            </View>
            <View>
            <ListItem
                title="Logout"
                IconComponent={ <Icon name="logout" backgroundColor="#ffe66d" /> }
                // onPress={handleLogout}
                onPress={()=>Logout()}
            />
            </View>
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    account:{
        paddingVertical:30
    }
})
