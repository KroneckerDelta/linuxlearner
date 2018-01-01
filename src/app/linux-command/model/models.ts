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
    public command: string;
    public pattern: string;
    public schalter: string;
    public pipe: LinuxCommandAPI;

    constructor(lc: LinuxCommand) {
        this.command = lc.command;
        this.pattern = lc.pattern;
        this.schalter = lc.currentOption;
    }
    public setPipe(pipe: LinuxCommandAPI) {
        this.pipe = pipe;
    }

}