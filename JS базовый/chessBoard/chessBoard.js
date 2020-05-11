'use strict';

/* Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые
ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F,
G, H. */

const settings = {
    rowsCount: 10,
    colsCount: 10,
};


const chess = {
    settings,
    gameContainerEl:document.getElementById('game'),

    render() {
       const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
       const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        for (let row = 0; row < this.settings.rowsCount; row++) {
          const tr = document.createElement('tr');
          this.gameContainerEl.appendChild(tr);
          for (let col = 0; col < this.settings.colsCount; col++) { 
                const td = document.createElement('td');
                tr.appendChild(td);
                if (row === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                };
                if(col === 0 && rows[row] !== 0) {
                    tr.innerHTML = rows[row];
                }; 
                if (row === 9 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                };  
                if(col === 9 && rows[row] !== 0) {
                    td.innerHTML = rows[row];
                };
                if (this.isCellIsBlack(row, col) == true) {
                    td.style.backgroundColor = 'grey';
                };
    
            }
        }
    
    }, 
    
    isCellIsBlack(rowNum, colNum) {
        if (((rowNum % 2 == 1 && colNum % 2 == 0) || (rowNum % 2 == 0 && colNum % 2 ==1)) 
        && rowNum !==0 && colNum !==0 && rowNum !==9 && colNum !==9) {
      return true;
    }
    }   
};

 chess.render();
