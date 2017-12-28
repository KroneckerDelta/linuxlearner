export class LinuxCommand {
    constructor(
        public command: string,
        public options: string[],
        public currentOption?: string
    ) {
    }
}
