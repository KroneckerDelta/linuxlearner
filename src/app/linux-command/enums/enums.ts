export enum Commands {
    grep,
    sed,
    wc
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