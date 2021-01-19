
module.exports = (sequelize, DataTypes)=>{
    table = sequelize.define('todoes',{
        
            text:{
             types: DataTypes.STRING,
             allownull: 'false'
            }
        
    })
    return todoes;
}