const user = {
    name: 'Tony Tinkers',
    age: 42,
    job: 'inventors'
}

test('user matches', () => {
    expect(user).toMatchSnapshot()
})