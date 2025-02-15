export interface ICellStyleRulesType {
    enable?: boolean;
    rule?: IStringCellValueRule | INumberCellValueRule;
    whenTrue?: ICellStyle;
    whenFalse?: ICellStyle;
}
export interface IStringCellValueRule {
    operator: StringOperators;
    value: string;
}
export interface INumberCellValueRule {
    operator: NumberAndDateOperators;
    value: number | Date;
}
export declare enum StringOperators {
    EQUALS = "equals",
    CONTAINS = "contains",
    STARTSWITH = "starts with",
    ENDSWITH = "ends with",
    NOTEQUALTO = "not equal to"
}
export declare enum NumberAndDateOperators {
    GREATERTHAN = ">",
    LESSTHAN = "<",
    GREATERTHANOREQUALTO = ">=",
    LESSTHANOREQUALTO = "<=",
    EQUALTO = "=",
    NOTEQUALTO = "!="
}
export interface ICellStyle {
    textColor?: string;
    fontWeight?: string;
}
