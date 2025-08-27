import { Sequelize } from 'sequelize'

const db = new Sequelize('postgresql://admin_products_ngie_user:XJTBClFaGoAD0nBZzzFcImkp0nJayemp@dpg-d2n59dndiees73c7ao30-a.oregon-postgres.render.com/admin_products_ngie', {
    dialectOptions : {
        ssl : {
            require : false
        }
    }
})

export default db