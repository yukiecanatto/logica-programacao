function mediaAluno() {
    
    // console.log("Olá, Console!");
    
    // document.write("Olá, Documento!");
    
    // window.alert("Olá, Janela! Vim aqui te torrar!");
    
    
    // Lógica de Programação
    // Problema: obter 3 notas de um aluno, calcular a média,
    // exibir a média e exibir a situação do aluno: aprovado,
    // em exame ou reprovado.
    
    
    console.log('inicio do programa');
    
    
    // declaração das váriaveis
    
    // let nota1, nota2, nota3;
    
    const nota1 = parseFloat (document.getElementById("nota1").value);
    const nota2 = parseFloat (document.getElementById("nota2").value);
    const nota3 = parseFloat (document.getElementById("nota3").value);
    
    console.log("A nota 1 é:" , nota1);
    console.log("A nota 2 é:" , nota2);
    console.log("A nota 3 é:" , nota3);
    
    
    
    //cálculo da média
    const media = (nota1 + nota2 + nota3) / 3;
    const media_fix = media.toFixed(2);
    
    
    console.log("A média do aluno é:" , media_fix);
    document.getElementById("mediaFinal").innerHTML = "A média do aluno é: " + media_fix + "<br>";
    
    
    // condicional "if" e "else"
    
    if (media_fix >= 7) {
        console.log("Aluno aprovado, com média:" + media_fix);
        document.getElementById("mediaFinal").innerHTML += "Situação: Aprovado";

    } else if (media_fix < 7 && media_fix >= 5) {
        console.log("Aluno em exame, com média:" + media_fix);
        document.getElementById("mediaFinal").innerHTML += "Situação: Em exame";
    
    } else {
        console.log("Aluno reprovado, com média:" + media_fix);
        document.getElementById("mediaFinal").innerHTML += "Situação: Reprovado";
    
    }
    
    
    console.log("Fim do programa");

}

