import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
  tableName: 'products'
})
class Product extends Model {
  
  @Column({
    type: DataType.STRING(70),
    allowNull: false
  })
  declare name: string

  @Column({
    type: DataType.DECIMAL(6, 2),  
    allowNull: false
  })
  declare price: number

  @Default(true)  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  declare availability: boolean
}

export default Product
