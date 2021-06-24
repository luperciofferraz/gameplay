import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void; 
}


export function Guilds({ handleGuildSelect } : Props) {

    const guilds = [
    
        {
            id: '1',
            name: 'Lendários 1',
            icon: 'image.png',
            owner: true
        },

        {
            id: '2',
            name: 'Lendários 2',
            icon: 'image.png',
            owner: true
        },

        {
            id: '3',
            name: 'Lendários 3',
            icon: 'image.png',
            owner: true
        },

        {
            id: '4',
            name: 'Lendários 4',
            icon: 'image.png',
            owner: true
        },

        {
            id: '5',
            name: 'Lendários 5',
            icon: 'image.png',
            owner: true
        },

        {
            id: '6',
            name: 'Lendários 6',
            icon: 'image.png',
            owner: true
        },

        {
            id: '7',
            name: 'Lendários 7',
            icon: 'image.png',
            owner: true
        }






    ]

    return (
    
        <View style={styles.container}> 
            <FlatList
                data={guilds}
                keyExtractor={ item => item.id }
                renderItem={ ({ item }) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
                style={styles.guilds}
            />
        </View>
    );

};