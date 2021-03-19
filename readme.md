```js
import FieldClass from "@component/Widget/FormGenerateV2/Class/FieldClass";
```

Самая простая форма
```js
export default [
  new FieldClass({type: 'DATE'  , label: 'Дата'   , name: 'group1.date'}),
  new FieldClass({type: 'STRING', label: 'Строка' , name: 'group1.str' }),
];
```

Форма с простой группировкой полей
```js
export default [
  {
    type: 'fieldset', // tabs, vertical tabs
    label: '',
    name: 'group1',
    children: [
      new FieldClass({}),
      new FieldClass({}),
      new FieldClass({}),
    ]
  },
];
```

Форма с простой группировкой полей 2
```js
export default [
  {
    type: 'group', // tabs, vertical tabs
    label: '',
    name: 'group1',
    children: [
      new FieldClass({type: 'DATE'  , label: 'date', name: 'date'}),
      new FieldClass({type: 'STRING', label: 'str' , name: 'str' }),
    ]
  },
];
```

Форма со сложной группировкой полей (показывать доп. поля)
```js
export default [
  // TODO: компонент показывать/скрывать дополнительные поля
  {
    type: 'group-addition', // tabs, vertical tabs
    label: 'Группа с возможностью скрыть поля',
    name: 'group1',
    children: [
      new FieldClass({type: 'DATE'  , label: 'Дата'   , name: 'group1.date'}),
      new FieldClass({type: 'STRING', label: 'Строка' , name: 'group1.str' }),
    ],
    setting: {
      additionalView: false,
      additionalFields: { 'group1.str' : true}, // or ['group1.str']
    }
  },

  new FieldClass({type: 'DATE'  , label: 'date', fieldName: 'date'}),
  new FieldClass({type: 'STRING', label: 'str' , fieldName: 'str' }),

];
```
