const types = ["EPIC", "STORY", "TASK", "SUBTASK", "BUG"];
const names = ["Hemanth Kumar", "John Doe", "Testing Banma", "Kumar Hemanth", "Unassigned"];
const status = ["IN_PROGRESS", "TODO", "DONE"];

export const data = Array.from(new Array(50)).map((_, idx) => ({
    key: idx + 1,
    type: types[idx % 5],
    summary: "Test task of type: " + types[idx % 5],
    assignee: names[idx % 5],
    reporter: names[idx % 3 == 0 ? 0 : 3],
    status: status[idx % 3],
    resolution: status[idx % 3] == "DONE" ? "Done" : "Unresolved",
    created_at: new Date(1662040000000 - Math.random() * 9999000000),
    updated_at: new Date(1662040000000 - Math.random() * 9999000000),
    due_at: idx % 2 == 0 ? new Date(1662040000000 - Math.random() * 9999000000) : null
}));
