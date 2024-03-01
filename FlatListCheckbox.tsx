import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import CheckboxItem from './CheckboxItem';
import { Entypo } from '@expo/vector-icons';

interface User
{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    isSelected?: boolean; // Optional property to track selection state
}


const FlatListCheckbox: React.FC<User> = () =>
{
    const [users, setUsers] = useState<User[]>([]);
    const [showCheckBox, setShowCheckBox] = useState<boolean>(false);
    useEffect(() =>
    {
        getData();
    }, []);

    const getData = async () =>
    {
        try
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json: User[] = await response.json();
            const userWithSelection = json.map(user => ({ ...user, isSelected: false }));
            setUsers(userWithSelection);
        } catch (error)
        {
            console.error(error);
        }
    };

    const onSelect = (ind: number) =>
    {
        const updatedUsers = users.map((user, index) =>
            index === ind ? { ...user, isSelected: !user.isSelected } : user
        );
        setUsers(updatedUsers);
    };

    const selectAll = () =>
    {
        const allSelectedUsers = users.map(user => ({ ...user, isSelected: true }));
        setUsers(allSelectedUsers);
    };

    const clearAll = () =>
    {
        const unselectUsers = users.map(user => ({ ...user, isSelected: false }));
        setUsers(unselectUsers);
    };

    const getSelectedItems = () =>
    {
        const selectedItems = users.filter(user => user.isSelected);
        return selectedItems.length;
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {showCheckBox && (
                <View
                    style={{
                        width: '100%',
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                        {
                            setShowCheckBox(false);
                            clearAll();
                        }}
                    >
                        <Entypo name="circle-with-cross" size={24} color="black" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            padding: 10,
                            color: 'black',
                            borderWidth: 1,
                            marginLeft: 20,
                            borderRadius: 10,
                        }}
                        onPress={() =>
                        {
                            selectAll();
                        }}
                    >
                        Select All
                    </Text>
                    <Text style={{ marginLeft: 20 }}>
                        {'selected(' + getSelectedItems() + ') items'}
                    </Text>
                </View>
            )}

            <FlatList data={users}
                contentContainerStyle={{ marginTop: 20 }}
                renderItem={({ item, index }) =>
                {
                    return <CheckboxItem
                        item={item}
                        onLongPress={() =>
                        {
                            setShowCheckBox(true);
                        }}
                        onSelect={() => { onSelect(index); }}
                        isCheckBox={showCheckBox}
                    />;
                }} />
        </SafeAreaView>
    );
};

export default FlatListCheckbox;

const styles = StyleSheet.create({});