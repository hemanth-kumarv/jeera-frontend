const types = ["EPIC", "STORY", "TASK", "SUBTASK", "BUG"];
const names = ["Hemanth Kumar", "John Doe", "Testing Banma", "Kumar Hemanth", "Unassigned"];
export const status = ["TODO", "IN_PROGRESS", "DONE"];
const priority = ["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"];

export const data = Array.from(new Array(160)).map((_, idx) => ({
    key: idx + 1,
    type: types[Math.floor(Math.random() * 100) % 5],
    summary: "Test task of type: " + types[Math.floor(Math.random() * 100) % 5],
    assignee: names[Math.floor(Math.random() * 100) % 5],
    reporter: names[Math.floor(Math.random() * 100) % 3 == 0 ? 0 : 3],
    status: status[Math.floor(Math.random() * 100) % 3],
    resolution: status[Math.floor(Math.random() * 100) % 3] == "DONE" ? "Done" : "Unresolved",
    created_at: new Date(1662040000000 - Math.random() * 9999000000),
    updated_at: new Date(1662040000000 - Math.random() * 9999000000),
    due_at: idx % 4 == 0 ? new Date(Date.now() + (Math.random() - 0.5) * 9900000000) : null,
    story_points: Math.floor(Math.random() * 5),
    priority: idx % 2 == 0 ? priority[Math.floor(Math.random() * 100) % 5] : null
}));
