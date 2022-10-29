const types = ["EPIC", "STORY", "TASK", "SUBTASK", "BUG"];
const names = ["Hemanth Kumar", "John Doe", "Testing Banma", "Kumar Hemanth", "Unassigned"];
const status = ["IN_PROGRESS", "TODO", "DONE"];
const priority = ["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"];

export const data = Array.from(new Array(160)).map((_, idx) => ({
    key: idx + 1,
    type: types[idx % 5],
    summary: "Test task of type: " + types[idx % 5],
    assignee: names[idx % 5],
    reporter: names[idx % 3 == 0 ? 0 : 3],
    status: status[idx % 3],
    resolution: status[idx % 3] == "DONE" ? "Done" : "Unresolved",
    created_at: new Date(1662040000000 - Math.random() * 9999000000),
    updated_at: new Date(1662040000000 - Math.random() * 9999000000),
    priority: idx % 2 == 0 ? priority[Math.floor(Math.random() * 100) % 5] : null
}));
