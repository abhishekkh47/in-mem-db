import Parser from "../parser/parser"
import CommandExecutor from "../executor/command-executor"
import * as readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function startRepl(parser: Parser, executor: CommandExecutor) {
    rl.question("> ", (input)=>{
        if (input.toLowerCase().trim() === "exit") {
            rl.close();
            return;
        }
        const command = parser.parse(input)
        const result = executor.execute(command)
        console.log(result);
        startRepl(parser, executor)
    })
}
export default startRepl