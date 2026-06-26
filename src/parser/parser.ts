export interface ParseCommand {
    command: string;
    args: string[];
}

class Parser {
    parse(input: string): ParseCommand {
        const [command, ...args] = input.split(" ")
        return {
            command,
            args
        }
    }
}

export default Parser