import Database from "./database/database"
import Parser from "./parser/parser"
import CommandExecutor from "./executor/command-executor"
import startRepl from "./cli/repl"
const db = new Database()
const parser = new Parser()
const executor = new CommandExecutor(db)

startRepl(parser, executor)