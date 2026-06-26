import Database from "../database/database";
import { ParseCommand } from "../parser/parser";

class CommandExecutor {
    constructor(private db: Database) {}

    execute(command: ParseCommand) {
        const { command: cmd, args } = command
        const [key, value] = args
        if (!key) {
            return 'ERROR: Missing key'
        }
        switch (cmd.toUpperCase()) {
            case 'SET':
                if (!value) {
                    return 'ERROR: Missing value'
                }
                this.db.set(key, value)
                return 'OK'
            case 'GET':
                return this.db.get(key)
            case 'DELETE':
                this.db.delete(key)
                return 'OK'
            case 'CLEAR':
                this.db.clear()
                return 'OK'
            case 'KEYS':
                return this.db.keys()
            case 'VALUES':
                return this.db.values()
            case 'HAS':
                return this.db.has(key)
            case 'SIZE':
                return this.db.size()
            default:
                return `Unknown command: ${cmd}`
        }
    }
}
export default CommandExecutor