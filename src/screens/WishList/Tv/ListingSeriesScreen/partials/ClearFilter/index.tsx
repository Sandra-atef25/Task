
import PrimaryButton from "../../../../../../components/atoms/PrimaryButton";
import { useTheme, withTheme } from "../../../../../../theme/theming/themeProvider";

import { clearFilterProp } from "./interface";

const ClearFilterButton=({handleClearFilter}:clearFilterProp)=>{
    const theme=useTheme();
    return (
        <PrimaryButton color={theme.Colors.red} name="Clear Filter" onPress={handleClearFilter} />
    );
};

export default ClearFilterButton;