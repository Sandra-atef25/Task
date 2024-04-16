import { View, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { SearchBarProp } from './interface/interface';
import { useTheme } from '../../../theme/theming/themeProvider';

const SearchBar = ({ searchText, setSearchText, onClearSearchHandle }:SearchBarProp) => {
    const theme=useTheme();
    return (
        <View style={[styles.textClicked,{backgroundColor:theme.Colors.gray}]}>
            <Ionicons name='search' size={20} color={theme.Colors.navy} style={styles.icon}></Ionicons>
            <TextInput value={searchText} onChangeText={setSearchText} style={[styles.textin,{color:theme.Colors.TextColor}]} placeholder="Search" />
            <Button color={theme.Colors.red} title='clear' onPress={onClearSearchHandle} />
        </View>
    );
};
export default SearchBar;