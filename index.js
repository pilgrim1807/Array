// giveParcel() - для выдачи посылки и удаления клиента из начала массива, ('Кристина' , 'Олег', 'Кирилл',)
// leaveQueueWithoutParcel() - для удаления клиента, который не получил посылку из конца списка. ('Мария', 'Светлана', 'Артем', 'Глеб'])
// 1) Удалить Кристина и Олег - shift() - giveParcel() 
// 2)удалить Кирилла  shift() giveParcel()
// 3)удалить 'Мария', 'Светлана', 'Артем', 'Глеб' pop() leaveQueueWithoutParcel()

//  if Условие Когда какой-либо человек получает посылку, необходимо вывести в модальном окне сообщение: alert( “ name получил(а) посылку.)  В очереди осталось length человек.”
// else Если же человек не получил посылку и ушел из очереди, то выведите в модальном окне через alert() сообщение: “ name не получил(а) посылку и ушел(ла) из очереди”.


const peopleWaiting = ['Кристина' , 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
function giveParcel() {
    if (peopleWaiting.length > 0) {
        const name = peopleWaiting.shift();
        alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
    }
}
    function leaveQueueWithoutParcel() {
        if (peopleWaiting.length > 0) {
          const name = peopleWaiting.pop(); // Получаем имя последнего человека в очереди
          alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
        }
    }

    giveParcel();

    giveParcel();

    giveParcel();

    while (peopleWaiting.length > 0) {
        leaveQueueWithoutParcel();
      }

      console.log(peopleWaiting);