import Database from "./database/database"
import Parser from "./parser/parser"
import CommandExecutor from "./executor/command-executor"

const db = new Database()

db.set("name", "Abhishek")
console.log(db.get("name"))

db.delete("name")
console.log(db.get("name"))

const parser = new Parser()
const executor = new CommandExecutor(db)
const command = parser.parse("set name Abhishek")
console.log(executor.execute(command))
const command1 = parser.parse("get name")
console.log(executor.execute(command1))