const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        
    },
    module: {
        rules: [
            {
                //toda vez que for precisar de um arquivo js, e ele nao estiver na pasta node_modules, converte ele utilizando babel
                //convertendo arquivos js utilizando o babel
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },//vai pegar o css que foi interpretado no css-loader e jogar dentro do HTML
                    { loader: 'css-loader' },//ira ler o arquivo css e interpretar as importações que tem no arquivo css
                ]
            }
        ]
    },
};