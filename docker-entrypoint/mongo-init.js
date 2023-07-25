db = db.getSiblingDB("my-database");
db.createUser({
  user: "noroot123",
  pwd: "noroot123",
  roles: [{ role: "readWrite", db: "my-database" }],
});
