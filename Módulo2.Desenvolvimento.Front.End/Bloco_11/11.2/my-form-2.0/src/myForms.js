import React from "react"

class Forms extends React.Component {
    state = {
        Nome: '',
        Email: '',
        CPF: 0,
        Endereco: '',
        Cidade: '',
        Estado: '',
        Tipo: '',
    }

    handleUpperCase = ({ target }) => {
        const { value } = target
        this.setState({
            Nome: value.toUpperCase()
        })
    }

    handleReplace = ({ target }) => {
        const { value } = target
        this.setState({
            Endereco: value.replace(/[^a-zA-Zs]/g, "")
        })
    }
    render() {
        return (
            <div>
                <fieldset>
                    <input
                        name="Nome"
                        type='text'
                        maxLength='40'
                        value={this.state.Nome}
                        onChange={this.handleUpperCase}
                        required />

                    <input
                        name="Email"
                        type='text'
                        maxLength='50'
                        required />

                    <input
                        name="CPF"
                        type='text'
                        maxLength='11'
                        required />

                    <input
                        name="Endereco"
                        type='text'
                        maxLength='200'
                        value={this.state.Endereco}
                        onChange={this.handleReplace}
                        required />

                    <input
                        name="Cidade"
                        type='text'
                        required />

                    <select name="Estado" required>

                    </select>

                    <input name="Tipo" type='radio' required />Casa
                    <input name="Tipo" type='radio' required />Apartamento
                </fieldset>
            </div>
        )
    }
}

export default Forms;