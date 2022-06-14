const request = require("supertest")
const app = require('../index.js')

describe('user route', () => {

    //test la route GET /user
    it('send all user in a table', async () => {

        //il faut qu'on fasse la requete
        const response = await request(app)
            .get('/user')

        // on vérifie que la réponse est un succes (status 200)
        expect(response.status).toBe(200)

        // on va verifier que la reponse c'est bien un tableau
        expect(Array.isArray(response.body)).toBe(true)

        // on va verifier que c'est un tableau d'objet
        expect(typeof response.body[0]).toBe("object")
    })

     // on teste la route GET /user/:id avec un id qui marche
  it('should send a specific user according to its id', async () => {
    const id = '626c58426113a89b99e44e2e'

    const response = await request(app)
      .get(`/user/${id}`)

    // on vérifie que la réponse est un succes (status 200)
    expect(response.status).toBe(200)

    expect(typeof response.body).toBe("object")
    // je m'attends a ce que l'id du hero renvoyé
    // soit bien la même que id que j'ai défini en haut
    expect(response.body.id).toBe(id)
  })

  // on teste la route GET /user/:id avec un id qui n'existe pas
  it('should return an error if user does not exist', async () => {
    const id = 3

    const response = await request(app)
      .get(`/user/${id}`)

    expect(response.status).toBe(404)
    expect(response.body.error).toBeDefined()
  })

  // on teste la route POST /user
  it('should create a hero', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: "superman",
        age: 12
      })

    expect(response.status).toBe(200)
    expect(typeof response.body).toBe("object")
    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBeDefined()
    expect(response.body.age).toBeDefined()

  })

})