import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

type itemTypes = {
    item: any;
    onLongPress: any;
    onSelect: any;
};

const CheckboxItem = ({ item, onLongPress, onSelect }: itemTypes) => 
{
    return (
        <TouchableOpacity
            style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: '#f2f2f2',
                marginTop: 10,
                paddingBottom: 20,
                paddingTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                paddingRight: 10,
            }}
            onLongPress={() =>
            {
                onLongPress();
            }}>
            <View>
                <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 20, color: 'black' }}>
                    {item.username}
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 14, marginTop: 5 }}>
                    {'Address: ' + item.address.city}
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 14, marginTop: 5 }}>
                    {'Email: ' + item.email}
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 14, marginTop: 5 }}>
                    {'Company: ' + item.company.name}
                </Text>
            </View>

        </TouchableOpacity>
    );
};

export default CheckboxItem;

const styles = StyleSheet.create({});