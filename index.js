// Project W/Function

function rankedCalculator(victories, defeats) {
    let rank = victories - defeats;
    let result = "not classified";
  
    if (victories < 10) {
      result = "Ferro";
    } else if (victories > 10 && victories <= 20) {
      result = "Bronze";
    } else if (victories > 20 && victories <= 50) {
      result = "Prata";
    } else if (victories > 50 && victories <= 80) {
      result = "Ouro";
    } else if (victories > 80 && victories <= 90) {
      result = "Diamante";
    } else if (victories > 90 && victories <= 100) {
      result = "Lendário";
    } else if (victories >= 101) {
      result = "Imortal";
    }
  
    console.log("O Herói tem saldo de " + rank + " e está no nível " + result);
  }
  
  rankedCalculator(70, 20);
