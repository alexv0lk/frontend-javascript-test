## Тестовое задание React приложение

# Приложение было сделано с помощью create-react-app

ссылка на gh-pages (https://alexv0lk.github.io/frontend-javascript-test)
активировать тестовый json - https://cors-anywhere.herokuapp.com/corsdemo

__Функционал__

- Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике &mdash; по убыванию. Графическим элементом или текстовым сообщением указывается направление сортировки.
- Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу. Необходимо предоставить пользовательскую навигацию для перехода по страницам.
- Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется по нажатию на кнопку "Найти".
- По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
- Данные в таблицу загружаются с сервера. Способ загрузки с сервера на ваш выбор.
- Над таблицей присутсвует кнопка __добавить__, по нажатии на которую выпадает форма добавления ряда. ДЛЯ КАЖДОГО ПОЛЯ ДОБАВЬТЕ ВАЛИДАЦИЮ(id — число, firstName, lastName — буквы, email — формат email, phone — маска телефона).
```

	+------+------------+-----------------+-----------------+---------------+
	| id   | firstName  | lastName        | email           | phone         |
	+------+------------+-----------------+-----------------+---------------+
	|input | input      | input           | input           | input         |
	+------+------------+-----------------+-----------------+---------------+
	
```

- После заполнения всех инпутов активируется кнопка __Добавить в таблицу__ которая вставляет заполненный ряд в начало таблицы
  

Для демонстрации работы компонента необходимо сделать простую HTML страницу.
Пользователю предлагается выбрать набор данных: маленький или большой.
При выборе набора данных он загружается с сервера и по данным строится таблица.

__Формат данных от сервера__

Сервер возвращает JSON-массив данных.
Пример данных: 
```js
[
	{
		id: 101,
		firstName: 'Sue',
		lastName: 'Corson',
		email: 'DWhalley@in.gov',
		phone: '(612)211-6296',
		address: {
			streetAddress: '9792 Mattis Ct',
			city: 'Waukesha',
			state: 'WI',
			zip: '22178'
		},
		description: 'et lacus magna dolor...',
	}
}
```

Маленький объем данных берется по ссылке
http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}

Большой объем данных берется по ссылке
http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}