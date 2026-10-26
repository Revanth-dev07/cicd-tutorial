
const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../server");

test("GET /health returns a healthy status", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, {
        status: "OK",
        message: "Server is healthy"
    });
});
