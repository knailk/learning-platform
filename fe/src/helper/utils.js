export const displayDate = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
};

export const pythonIntellisense = (monaco) => {
    monaco.languages.registerCompletionItemProvider('python', {
        provideCompletionItems: () => {
            let suggestions = [
                {
                    label: 'if',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'if ${1:condition}:\n    ',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: 'for',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'for item in range(${1:}):\n    ',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
                {
                    label: 'while',
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: 'while (${1:expression}):\n    ',
                    documentation: 'Describe your library here',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                },
            ];
            return { suggestions: suggestions };
        },
    });
};
