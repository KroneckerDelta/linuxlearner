export class LinuxCommand {
    constructor(
        public command: string,
        public options: string[],
        public pattern?: string,
        public currentOption?: string
    ) {
    }
}
