class Database {
    private store = new Map<string, string>();

    set(key: string, value: string) {
        this.store.set(key, value)
    }

    get(key: string) {
        return this.store.get(key)
    }

    delete(key: string) {
        this.store.delete(key)
    }

    clear() {
        this.store.clear()
    }

    keys() {
        return Array.from(this.store.keys())
    }

    values() {
        return Array.from(this.store.values())
    }
    
    has(key: string) {
        return this.store.has(key)
    }

    size() {
        return this.store.size
    }
}

export default Database