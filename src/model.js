import image_1 from './assets/image_2.jpg'
import image_2 from './assets/image_3.jpg'
import image_3 from './assets/image_4.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/block'

export const model = [
    new TitleBlock('Простой конструктор сайтов на JavaScript', {
        tag: 'h2',        
        styles: {
            background: 'linear-gradient(#00bfff, #7B68EE)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    // {type: 'title', value: 'Простой конструктор сайтов на JavaScript', 
    // options: {
    //     tag: 'h2',
    //     //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;`
    //     styles: {
    //         background: 'linear-gradient(#00bfff, #7B68EE)',
    //         color: '#fff',
    //         padding: '1.5rem',
    //         'text-align': 'center'
    //     }
    // }},
    new TextBlock('Конутруктор сайтов - специальный сервис, посредством которого можно создать Web-сайт. Данный конструктор сделан в учебных целях. Реализован на чистом JavaScript по стандарту EcmaScript6.', {
        tag: 'p',
        styles: {
            background: '#7B68EE',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),    
    new ColumnsBlock([
        'Колонки сделаны на основе системы сеток Bootsrap 4. </br> Bootsrap реализован с помощью flexbox и полностью адаптивен.',
        'В данном примере с помощью наших предустановленных классов сеток были созданы 3 колонки равной ширины для маленьких, средних и больших девайсов. Эти колонки выровнены с помощью родительского класса .container.',
        'Bootstrap, самый популярный в мире инструментарий с открытым исходным кодом для интерфейса пользователя, включающего переменные и миксины Sass, адаптивную сеточную систему, обширные предварительно созданные компоненты и мощные плагины JavaScript.'
    ], {
        tag: 'p',
        styles: {
            background: '#7B68EE',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock([
        image_1,
        image_2,
        image_3
    ], {
        styles: {
            'object-fit': 'cover',
            width: '100%',
            height: '400px',
            margin: '5px',
            'box-shadow': '0 0 10px rgba(0,0,0,0.5)'
        }
    })
]