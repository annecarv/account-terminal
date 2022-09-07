import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

function operation () {

    inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    }
])
    .then((answer) => {
        const action = answer['question']

    if( action === 'Criar Conta') {
        createAccount()
    }
    })
    .catch((err) => {console.log(err)})

}

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns, sua conta foi aberta!'))
    console.log(chalk.bgPink.black('Defina as opções da sua conta:'))
}

operation()