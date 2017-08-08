$(function() {
    
//tworzenie losowego identyfikatora:
function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(str);
    return str;

}
//console.log(randomString());

//TWORZENIE KLASY 'COLUMN':
function Column(name) {
    var self = this; // useful for nested functions

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
        //tworzenie komponentów kolumny:
        var $column = $('<div>').addClass('column');
        var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
        var $columnCardList = $('<ul>').addClass('column-card-list');
        var $columnDelete = $('<button>').addClass('btn-delete').text('x');
        var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
        //dodawanie ewentów:
        $columnDelete.click(function() {
        self.removeColumn();
        });
        $columnAddCard.click(function() {
            self.addCard(new Card(prompt("Enter the name of the card")
            ));
        });

        //konstruowanie elementów kolumny:
        $column.append($columnTitle)
            .append($columnDelete)
            .append($columnAddCard)
            .append($columnCardList);
        //zwracanie stworzenj kolumny:
        return $column;
    }
} 

//METODY DLA KLASY 'COLUMN'
Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
    removeColumn: function() {
      this.$element.remove();
    }
};



//TWORZENIE KLASY 'CARD':
function Card(description) {
    var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard(); //

    function createCard() {
        var $card = $('<li>').addClass('card');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardDelete = $('<button>').addClass('btn-delete').text('x');
        
        // PRZYPIĘCIE ZDARZENIA
        $cardDelete.click(function(){
            self.removeCard();
        });
        // SKŁADANIE KARTY
        $card.append($cardDelete)
            .append($cardDescription);
        // ZWRACANIE KARTY
        return $card;
    }
}

//METODY DLA KLASY 'CARD'
Card.prototype = {
    removeCard: function() {
        this.$element.remove();
    }
}


var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
};

//IMPLEMETACJA FUNKCJI initSortable()
function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }

// podpięcie zdarzenie kliknięcia, aby obsługiwało wrzucanie nowej kolumny do tablicy
$('.create-column')
  .click(function(){
    var name = prompt('Enter a column name');
    var column = new Column(name);
        board.addColumn(column);
  });


/*
  
// TWORZENIE KOLUMN
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// DODAWANIE KOLUMN DO TABLICY
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');

// DODAWANIE KART DO KOLUMN
todoColumn.addCard(card1);
doingColumn.addCard(card2);

*/

//koniec 
});

