import Database from "./database/database"

const db = new Database()

db.set("name", "Abhishek")
console.log(db.get("name"))

db.delete("name")
console.log(db.get("name"))