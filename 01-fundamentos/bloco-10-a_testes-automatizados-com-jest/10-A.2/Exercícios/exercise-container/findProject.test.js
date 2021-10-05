const getRepos = require('./findProject.js');

describe('busca projetos trybe dentro da url', () => {
    test('testa se os retornos contém alguns dos projetos trybe', () => {
        return getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
            expect(result).toContain('sd-01-week4-5-project-todo-list');
            expect(result).toContain('sd-01-week4-5-project-meme-generator');
        })
    })
})