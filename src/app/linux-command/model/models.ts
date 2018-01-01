export class LinuxCommand {
    constructor(
        public command: string,
        public options: string[],
        public pattern?: string,
        public currentOption?: string
    ) {
    }
}

export class LinuxCommandAPI {
    private command: string;
    private pattern: string;
    private schalter: string;
    public source: string;
    public pipe: LinuxCommandAPI;

    constructor(lc: LinuxCommand) {
        this.command = lc.command;
        this.pattern = lc.pattern;
        this.schalter = lc.currentOption;
    }

}