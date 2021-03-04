import {row, col, css} from './utils'

function title(element){
    // return `        
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${element.value}</h1>
    //         </div>
    //     </div>
    // `

    const {tag = 'h1', styles} = element.options
    // const tag = element.options.tag ?? 'h1'
    // const styles = element.options.styles
    return row(col(`<${tag}>${element.value}</${tag}>`), css(styles))
}

function text(element){
    const {tag = 'p', styles} = element.options
    return row(col(`<${tag}>${element.value}</${tag}>`), css(styles))
}

function columns(element){
    //let html = ''
    // element.value.forEach((column) => {
    //     html += `
    //         <div class="col-sm">
    //             ${column}
    //         </div>
    //     `
    // })
    const {styles} = element.options
    const html = element.value.map(column => col(column)).join('')
    return row(html, css(styles))    
}

function image(element){
    //return row(`<img src="${element.value}" />`)    
    const {styles} = element.options
    console.log(styles)
    const html = element.value.map(column => col(`<img src="${column}" style = "${css(styles)}"/>`)).join('')
    return row(html)
}

export const templates = {
    title,
    text,
    image,
    columns
}