import {col, row, css} from '../utils'


class Block {
    constructor(value, options) {        
        this.value = value
        this.options = options        
    }

    toHTML(){
        throw new Error('Метод toHTML не реализован')
    }
}

export class TitleBlock extends Block{
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block{
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {tag = 'p', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ColumnsBlock extends Block{
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {styles} = this.options
        const html = this.value.map(column => col(column)).join('')
        return row(html, css(styles))    
    }
}

export class ImageBlock extends Block{
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {styles} = this.options
        console.log(styles)
        const html = this.value.map(column => col(`<img src="${column}" style = "${css(styles)}"/>`)).join('')
        return row(html)
    }
}