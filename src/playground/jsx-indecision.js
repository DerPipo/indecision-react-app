console.log('app.js is running!')



const app = {
    title: 'Indecision App',
    subtitle: 'This is a subtitle',
    options: []
}

const removeAll = () => {
    app.options = []
    renderForm()
}

const onMakeDecision = () => {
    const index = Math.floor(Math.random() * app.options.length)
    const option = app.options[index]
    alert(option)
    // console.log(option)
}

const appRoot = document.getElementById('app')

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderForm()
    }
}

renderForm()