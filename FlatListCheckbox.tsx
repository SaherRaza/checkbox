import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CheckboxItem from './CheckboxItem';

const FlatListCheckbox = () =>
{
    const [users, setUsers] = useState<[]>([]);
    const [showCheckBox, setShowCheckBox] = useState<boolean>(false);
    useEffect(() =>
    {
        getData();
    }, []);

    const getData = () =>
    {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
            .then(json =>
            {
                console.log(json);
                setUsers(json);
            });

    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={users}
                contentContainerStyle={{ marginTop: 20 }}
                renderItem={({ item, index }) =>
                {
                    return <CheckboxItem item={item} onLongPress={() => { }} onSelect={() => { }} />;
                }} />
        </View>
    );
};

export default FlatListCheckbox;

const styles = StyleSheet.create({});