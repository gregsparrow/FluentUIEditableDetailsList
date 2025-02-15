/// <reference types="react" />
import { IColumn, IDropdownOption, ITag } from '@fluentui/react';
import { CalculationType } from "./calculationtype";
import { ICellStyleRulesType, StringOperators } from './cellstyleruletype';
import { EditControlType } from "./editcontroltype";
export interface IColumnConfig extends IColumn {
    key: string;
    text: string;
    editable?: boolean;
    dataType?: string;
    isResizable?: boolean;
    includeColumnInExport?: boolean;
    includeColumnInSearch?: boolean;
    inputType?: EditControlType;
    calculatedColumn?: {
        type: CalculationType;
        fields: any[];
    };
    onChange?: any;
    maxLength?: number;
    applyColumnFilter?: boolean;
    cellStyleRule?: ICellStyleRulesType;
    dropdownValues?: IDropdownOption[];
    pickerOptions?: IPickerOptions;
    disableSort?: boolean;
    hoverComponentOptions?: IHoverOptions;
    linkOptions?: ILinkOptions;
}
export interface ILinkOptions {
    href?: string;
    onClick?: any;
    disabled?: boolean;
}
export interface IHoverOptions {
    enable?: boolean;
    hoverChildComponent?: JSX.Element;
}
export interface IPickerOptions {
    tagsLimit?: number;
    minCharLimitForSuggestions?: number;
    pickerTags: ITag[];
    pickerDescriptionOptions?: IPickerDescriptionOption;
    suggestionsRule?: StringOperators;
}
export interface IPickerDescriptionOption {
    enabled: boolean;
    values: IPickerTagDescription[];
}
export interface IPickerTagDescription {
    key: string;
    description: string;
}
