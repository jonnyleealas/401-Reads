
const nameAndAge = require('./nameAndAge')

test('should output name and age', ()=>{
    const text = nameAndAge('jonny', 29)
    expect(text).toBe('jonny (29 years old)');
})
