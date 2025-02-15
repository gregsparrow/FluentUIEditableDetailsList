import { ICellStyleRulesType } from "../types/cellstyleruletype";
import { IColumnConfig } from "../types/columnconfigtype";
import { IGridColumnFilter } from "../types/columnfilterstype";
import { dateOperatorEval, IFilter, numberOperatorEval, stringOperatorEval } from "../types/filterstype";

export const filterGridData = (data : any[], filters : IFilter[]) : any[] => {
    var dataTmp : any[] = [...data];
    dataTmp.forEach((row) => {
        var isRowIncluded : boolean = true;
        filters.forEach((item) => {
            if(isRowIncluded){
                var columnType = item.column.dataType;
                switch(columnType){
                    case 'number':
                        isRowIncluded = isRowIncluded && numberOperatorEval(row[item.column.key], item.value, item.operator);
                        break;
                    case 'string':
                        isRowIncluded = isRowIncluded && stringOperatorEval(row[item.column.key], item.value, item.operator);
                        break;
                }
            }
        });

        if(isRowIncluded){
            row._is_filtered_in_ = true;
        }
        else{
            row._is_filtered_in_ = false;
        }
    });

    return dataTmp;
}

export const applyGridColumnFilter = (data : any[], gridColumnFilterArr : IGridColumnFilter[]) : any[] => {
    var dataTmp : any[] = [...data];
    if(gridColumnFilterArr.filter((item) => item.isApplied == true).length > 0){
        dataTmp.map((row) => row._is_filtered_in_column_filter_ = true);
    }

    gridColumnFilterArr.filter((gridColumnFilter) => gridColumnFilter.isApplied == true).forEach((gridColumnFilter, index) => {
        dataTmp.filter((row) => row._is_filtered_in_column_filter_ == true).forEach((row, i) => {
            row._is_filtered_in_column_filter_ = gridColumnFilter.filterCalloutProps!.filterList.filter(a => a.isChecked == true).map(a => a.text).includes(row[gridColumnFilter.column.key]);
        });
    });

    return dataTmp;
}

export const isColumnDataTypeSupportedForFilter = (datatype : string | undefined) : boolean => {
    switch(datatype){
        case 'number':
            return true;
        case 'string':
            return true;
        default:
            return false;
    }
}

export const IsValidDataType = (type : string | undefined, text : string) : boolean => {
    var isValid = true;
    switch(type) {
        case 'number':
            isValid = !isNaN(Number(text)) && isFinite(Number(text)) && !/e/i.test(text);
            break;
    }

    return isValid;
};

export const EvaluateRule = (datatType : string, cellValue: string | number | undefined, styleRule: ICellStyleRulesType | undefined): boolean => {
    if(!styleRule){
        return false;
    }
    
    switch(datatType){
        case 'number':
            return numberOperatorEval(Number(cellValue), styleRule?.rule!.value as number, styleRule?.rule!.operator);
        case 'string':
            return stringOperatorEval(String(cellValue), styleRule?.rule!.value as string, styleRule?.rule!.operator)
        case 'date':
            return dateOperatorEval(new Date(String(cellValue)), new Date(styleRule?.rule!.value), styleRule?.rule!.operator);
        default:
            return false;
    }
}

export const ConvertObjectToText = (obj : any, columns: IColumnConfig[]) : string => {
    var text : string = '';

    columns.forEach((col) => {
        text += (obj[col.key] == null ? '' : obj[col.key]) + "\t";
    });
    
    return text.substring(0, text.lastIndexOf('\t'));
}

export const ParseType = (type : string | undefined, text : string) : any => {
    if(text.trim().length == 0){
        return null;
    }

    switch(type){
        case 'number':
            return Number(text);
        case 'date':
            return Date.parse(text);
    }

    return text;
}

export const GetDefault = (type : string | undefined) : any => {
    switch(type){
        case 'date':
            return new Date();
        default:
            return null;
    }
}