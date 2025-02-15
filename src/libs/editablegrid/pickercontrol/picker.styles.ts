import { mergeStyleSets } from "@fluentui/react";

export const classNames = mergeStyleSets({
    plainCard: {
        width: 200,
        height: 140,
        display: 'flex',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
    },
});