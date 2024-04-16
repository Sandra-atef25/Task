import { View, Button } from 'react-native';
import { primaryButtonProps } from './interface/interface';
import { styles } from './style';

const PrimaryButton = ({ name, color, onPress,disabled=false }: primaryButtonProps) => {
    return (
        <View style={styles.ButtonContainer}>
            <Button title={name} color={color} onPress={onPress} disabled={disabled}/>
        </View>
    );
};
export default PrimaryButton;