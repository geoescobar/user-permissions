const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "George", role: ROLE.ADMIN },
    { id: 2, name: "Michael", role: ROLE.ADMIN },
    { id: 3, name: "Zach", role: ROLE.BASIC },
    { id: 4, name: "Joe", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "George's Project", userId: 1 },
    { id: 2, name: "Michael's Project", userId: 2 },
    { id: 3, name: "Zach's Project", userId: 3 },
    { id: 4, name: "Joe's Project", userId: 4 },
  ],
};
