import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Roni", 1500.00, 12345678);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Bernado", 4500, 12345679);
gerente.cadastrarSenha("123");

const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456789");

const cliente = new Cliente("Roninho", 123456978, "123456");
const clienteLogado = SistemaAutenticacao.login(cliente, "123456");

console.log(diretorLogado);
console.log(gerenteLogado); 
console.log(clienteLogado); 
