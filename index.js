let heroi = {
    nome: "Krow",
    xp: 1000,
    classe: "Berserker",
    habilidade: "Furia",
    arma: "Buster Sword",
    PontosDeVida: 2000,
    dano: 0,
    nivel: ""
}

function NivelDoHeroi(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 4000) {
        return "Prata";
    } else if (xp >= 4001 && xp <= 6000) {
        return "Ouro";
    } else if (xp >= 6001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 &&  xp <= 10000) {
        return "Ascendente";
    } else if (xp >= 10001 && xp <= 12000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function DanoDoHeroi(nivel) {
    switch (nivel) {
        case "Ferro":
            return 500
        case "Bronze":
            return 1000
        case "Prata":
            return 2000
        case "Ouro":
            return 3000
        case "Platina":
            return 4000
        case "Ascendente":
            return 5000
        case "Imortal":
            return 6000
        case "Radiante":
            return 10000
        default:
            return 100
    }
}

function PontosDeVida(nivel) {
    switch (nivel) {
        case "Ferro":
            return 1000
        case "Bronze":
            return 2000
        case "Prata":
            return 3000
        case "Ouro":
            return 3500
        case "Platina":
            return 4000
        case "Ascendente":
            return 4500
        case "Imortal":
            return 6000
        case "Radiante":
            return 10000
        default:
            return 500
    }
}

let xpInicial = 20000;

if (xpInicial > 16000) {
    console.log("Parabéns!! Seu herói ultrapassou os limites de poder.");
} else {
    for (let xp = xpInicial; xp <= 16000; xp += 1000) {
        heroi.xp = xp;
        heroi.nivel = NivelDoHeroi(heroi.xp);
        heroi.dano = DanoDoHeroi(heroi.nivel);
        heroi.PontosDeVida = PontosDeVida(heroi.nivel);

        console.log(`O Herói de nome ${heroi.nome}, da classe ${heroi.classe}, com a habilidade ${heroi.habilidade}, empunha a ${heroi.arma}, está no nível ${heroi.nivel}, tem ${heroi.PontosDeVida} de pontos de vida, e causa ${heroi.dano} de dano.`);

        break;
    }
}