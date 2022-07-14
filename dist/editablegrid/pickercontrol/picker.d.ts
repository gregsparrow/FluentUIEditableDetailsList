/// <reference types="react" />
import { ITag } from "@fluentui/react";
import { StringOperators } from "../../types/cellstyleruletype";
import { IPickerDescriptionOption } from "../../types/columnconfigtype";
interface Props {
    arialabel?: string;
    selectedItemsLimit?: number;
    pickerTags: ITag[];
    defaultTags?: ITag[];
    minCharLimitForSuggestions?: number;
    onTaglistChanged?: any;
    pickerDescriptionOptions?: IPickerDescriptionOption;
    suggestionRule?: StringOperators;
}
declare const PickerControl: (props: Props) => JSX.Element;
export default PickerControl;
