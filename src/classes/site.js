export class Site {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    render(model){
        this.$el.innerHTML = ''
        model.forEach(element => {
            this.$el.insertAdjacentHTML('beforeend', element.toHTML())
        })        
    }
}