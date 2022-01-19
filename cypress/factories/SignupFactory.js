var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstname = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
                name: `${firstname} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstname),
                whatsapp: '11951246548',
                address: {
                    postalcode: '09051510',
                    street: 'Rua Santarém',
                    number: '1000',
                    details: 'Casa 03',
                    district: 'Vila Floresta',
                    city_state: 'Santo André/SP'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }

        return data
    }
}