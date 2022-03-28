console.log("JS OK")

/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

/////MILESTONE 1/////
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

/////MILESTONE 2/////
Visualizzare a fianco ad ogni item ha una "x": 
cliccando su di essa, il todo viene rimosso dalla lista.

/////MILESTONE 3/////
Predisporre un campo di input testuale e un pulsante "aggiungi":
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1.Oltre al click sul pulsante,
intercettare anche il tasto ENTER per aggiungere il todo alla lista.
*/

const toDoList = [
    {
        text: 'Fare la spesa',
        done: true
    },
    {
        text: 'Cucinare',
        done: false
    },
    {
        text: 'Studiare',
        done: true
    },
    {
        text: 'Giocare a calcetto',
        done: false
    }
]

const app = new Vue(
    {
        el: '#vue-app',
        data: {
            toDoList,
            newToDo: '',
        },
        methods: {
            toDoDone(index) {
                this.toDoList.splice(index, 1);
            },
            addNewToDo() {
                const object = {
                    text: this.newToDo,
                    done: false,
                }
                if (this.newToDo.length > 0 && !this.newToDo.includes(' ')) {
                    this.toDoList.push(object)
                }
                this.newToDo = '';
            },
        }
    }
);