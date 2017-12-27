export enum Commands {
    grep,
    sed,
    wc
}

export enum GrepOptions {
    count,
    fixedstrings,
    ignorecase,
    invertmatch,
    linenumber,
    matchingfiles,
    wholeline
}

export enum WcOptions {
    chars,
    lines,
    words
}