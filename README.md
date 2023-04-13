# Exercicio-4-Simples-JavaScript

3 Exemplos de functions.

Ex1:
A função ehPar(num) recebe um número como parâmetro e verifica se é par, retornando true caso seja e false caso contrário é passado o número 4 
como parâmetro para a função, que é um número par, então a função retorna true. O resultado esperado é true.

Ex2:
A função ehPar(num) foi modificada para considerar também números negativos como pares.

A expressão Math.abs(num % 2) calcula o resto da divisão de num por 2, transforma o resultado em um número positivo utilizando a função Math.abs(),
e verifica se o resultado é igual a zero, indicando que num é par.

No primeiro exemplo, é passado o número 4 como parâmetro, que é um número par, portanto a função retorna true, como esperado.

No segundo exemplo, é passado o número -4 como parâmetro, que também é um número par, e a função retorna true, indicando que a modificação implementada está correta.

No terceiro exemplo, é passado o número 3 como parâmetro, que é um número ímpar, portanto a função retorna false, como esperado.

No quarto exemplo, é passado o número -3 como parâmetro, que é um número ímpar, e a função retorna false, indicando que a modificação implementada está correta.

Os resultados esperados são true, true, false e false, como indicado nos comentários ao lado de cada chamada da função console.log().

Ex3:
A função ehPar(num) verifica se o número passado como parâmetro é par, utilizando a operação % para obter o resto da divisão por 2. 

Se o resultado dessa operação for igual a zero, a função retorna true, indicando que o número é par. 

Caso contrário, a função retorna false, indicando que o número é ímpar.

No exemplo dado, é passado o número 4 como parâmetro para a função ehPar(num). Esse número é par, e a função verifica isso utilizando a operação %. 
Como o resultado dessa operação é igual a zero, a função retorna true, como esperado.

O resultado esperado para a chamada console.log(ehPar(4)); é true.
