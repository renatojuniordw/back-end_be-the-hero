const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    // Executar alguma coisa antes de iniciar os tetes
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    // Executar alguma coisa depois de todos os testes
    afterAll(async () => {
        await connection.destroy();
    });

    it('Espero que consiga criar uma nova ONG', async () => {
        const reponse = await request(app)
            .post('/ongs')
            .send({
                name: "IEC2",
                email: "contato@iec.com.br",
                whatsapp: "81986986332",
                city: "Recife",
                uf: "PE"
            });

        expect(reponse.body).toHaveProperty('id');
        expect(reponse.body.id).toHaveLength(8);

        console.log(reponse.body)

    });
});