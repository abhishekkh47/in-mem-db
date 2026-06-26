import Database from "../database/database";
import { ParseCommand } from "../parser/parser";

class CommandExecutor {
    constructor(private db: Database) {}

    execute(command: ParseCommand) {
        const { command: cmd, args } = command
        const [key, value] = args
        switch (cmd.toUpperCase()) {
            case 'SET':
                if (key === undefined || value === undefined) {
                    return 'ERROR: Missing key or value'
                }
                this.db.set(key, value)
                return 'OK'
            case 'GET':
                if (key === undefined) {
                    return 'ERROR: Missing key'
                }
                return this.db.get(key)
            case 'DELETE':
                if (key === undefined) {
                    return 'ERROR: Missing key'
                }
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
            case 'HELP':
                return ['Available commands:',
                'SET <key> <value>',
                'GET <key>',
                'DELETE <key>',
                'CLEAR',
                'KEYS',
                'VALUES',
                'HAS <key>',
                'SIZE',
                'HELP']
                .join('\n')
            default:
                return `Unknown command: ${cmd}`
        }
    }
}
export default CommandExecutor