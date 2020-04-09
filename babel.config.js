module.exports = {
    presets: [
        '@babel/preset-env',//vai converter funcionalidades que a aplicação não entende. Exemplo: converte o codigo para que funcione no internet explorer
        '@babel/preset-react'//add as funcionalidades do react nesta conversão
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};