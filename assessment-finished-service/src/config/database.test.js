const { test, expect } = require('@jest/globals');
const database = require('./database');

test('Connecting Database', async () => {
    const connection = await database.connect();
    expect(connection).toBeTruthy();
})

test('Disconnecting Database', async () => {
    const isDisconnceted = await database.disconnect();
    expect(isDisconnceted).toBeTruthy();
})

test('Disconnecting Database 2x', async () => {
    await database.disconnect();
    const isDisconnceted = await database.disconnect();
    expect(isDisconnceted).toBeTruthy();
})