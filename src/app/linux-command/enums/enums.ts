export enum Commands {
    grep,
    sed,
    wc,
    sort
}

export enum GrepOptions {
    none,
    count,
    fixedstrings,
    ignorecase,
    invertmatch,
    linenumber,
    matchingfiles,
    wholeline
}

export enum WcOptions {
    none,
    chars,
    lines,
    words
}

export enum SortOptions {
    none,
    check,
    merge,
    unique,
    ignoreLeadingBlanks,
    dictionaryOrder,
    ignoreCase,
    numericSort,
    generalNumericSort,
    humanNumericSort,
    monthSort,
    versionSort,
    reverse
}

export enum SedOptions {
    none,
    quiet,
    global,
    print,
    lineNumber,
    ignoreCase,
    substitute,
    append,
    insert,
    change,
    delete,
    translate
}